// import Head from "next/head";
// //import styles from "../styles/Home.module.css";
// import { useState, useEffect } from 'react';
// import Layout from "../components/layout";

// export default function Home() {
//   const [data, setData] = useState( { text:'' });
//   const [query, setQuery] = useState();
//   const [search, setSearch] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const [receivedMessages, setMessages] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (search) {
//       setIsLoading(true);
//       const res = await fetch(`/api/openai`, {
//         body: JSON.stringify({
//           name: search
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         method: 'POST'
//       })
//       const data = await res.json();
//       setData(data);
//       setMessages(data.text)
//       setIsLoading(false);
//     }};

//     fetchData();
//   }, [search]);
//   return (
//     <Layout>
//    <div className="border-solid rounded-sm shadow-md">
//       <div className="block bg-white rounded px-8 pt-6 pb-8 mb-4">
        
//       </div>
//       {isLoading ? (
//             <div>Typing ...</div>
//          ) : (
//            <>
//            <span>
//               {search}
//            </span>
//            <span>
//            {data.text}
//            </span>
//            </>
//            )}
//       <input type="text" value={query} onChange={event => setQuery(event.target.value)}/>
//         <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold pl-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() =>setSearch(query)}>
//           Send
//         </button>

//         <form onSubmit={sendMessage}>
//           <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

//           <button type="submit" disabled={!formValue}>Send</button>

//         </form>  
//     </div>
//     </Layout>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
import Layout from "../components/layout";
//import "./styles.css";

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messagesWrapper">
      {messages.map((message) => (
        <span key={message}>{message}</span>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

function App() {
  const [messages, setMessages] = useState([]);
  const [data, setData] = useState( { text:'' });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const addMessages = (e) => {
    e.preventDefault();
    setSearch(query);
    setMessages((m) => [...m, query]);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    //e.target.reset();
  };

  useEffect(() => {
        const fetchData = async () => {
          if (search) {
          setIsLoading(true);
          const res = await fetch(`/api/openai`, {
            body: JSON.stringify({
              name: search
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          const data = await res.json();
          setMessages((m) => [...m, data.text]);
          setIsLoading(false);
        }};
    
        fetchData();
      }, [search]);

  return (
    <Layout>
    <div className="App">
    {/* <form onSubmit={addMessages}> */}
    <form onSubmit={addMessages}>
      <Messages messages={messages} />
      {/* <input className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight 
    focus:outline-none focus:shadow-outline" type="text" value={query} onChange={event => setQuery(event.target.value)}/> */}
    <input className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight 
    focus:outline-none focus:shadow-outline" type="text" value={query} onChange={handleChange}/>
      {/* <button className="addButton"onClick={addMessages}> */}
      <button type="submit">Send</button>
      </form>
    </div>
    <style>{`
    .App {
      font-family: sans-serif;
      text-align: center;
    }
    
    .addButton {
      border: 1px black solid;
      font-size: 13px;
      margin-top: 1rem;
    }
    
    .messagesWrapper {
      display: flex;
      flex-direction: column;
      border: 1px black solid;
      width: auto;
      height: 100px;
      overflow: scroll;
      margin-top: 1rem;
    }
    `}</style>
    </Layout>
  );
}

export default App
