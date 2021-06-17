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
import { useUser } from '../lib/hooks'
import ReactDOM from "react-dom";
import uuid from "uuid";
import Layout from "../components/layout";

const Messages = ({ messages, currentUser }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  return (
    <div className="messagesWrapper">
      {messages.map((message, i) => (
        <div key={i} className="mb-5">
          <RenderMessage message={message} currentUser={currentUser} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const RenderMessage = ({ message: { text, user }, currentUser }) => {
  console.log("halalala", user, text);
  return user == "user" ? (
    <div className="messageContainer justifyend">
      <div className="messageBox-bgblue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className=" messageContainer justifystart">
      <img className="h-8 w-auto sm:h-10 chatSenderImage" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"/>
      <div className="messageBox-bglight">
        {text ? <p className="messageText colorDark">{text}</p> : null}
      </div>
    </div>
  );
};
function App() {
  const [messages, setMessages] = useState([{ text: "Hello! Ask away", user: "bot" }]);
  const [data, setData] = useState({ text: "" });
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(true);

  const addMessages = (e) => {
    e.preventDefault();
    setSearch(query);
    setMessages((m) => [...m, { text: query, user: "user" }]);
    setQuery('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    //e.target.reset();
    setCurrentUser(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        setIsLoading(true);
        const res = await fetch(`/api/openai`, {
          body: JSON.stringify({
            name: search,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const data = await res.json();
        setMessages((m) => [...m, { text: data.text, user: "bot" }]);
        setCurrentUser(false);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <Layout>
      <div className="App">
        <div className="textDiv">
          <h1 className="textDivHeading">This is sample Lorem Ipsum Heading </h1>
          <p className="textDivPara">This is sample Lorem Ipsum. This is sample Lorem Ipsum. This is sample Lorem Ipsum. This is sample Lorem Ipsum. This is sample Lorem Ipsum. </p>
          <p className="textDivPara">This is sample Lorem Ipsum. This is sample Lorem Ipsum. This is sample Lorem Ipsum. This is sample Lorem Ipsum. This is sample Lorem Ipsum. </p>
        </div>
          <div className="chatBoxDiv">
          <form className="form" onSubmit={addMessages}>
            <Messages messages={messages} currentUser={currentUser} />
            {/* <input className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" type="text" value={query} onChange={event => setQuery(event.target.value)}/> */}
            <div className="formfooter">
              <input
                placeholder="Type a message..."
                className="inputarea"
                type="text"
                value={query}
                onChange={handleChange}
              />
              {/* <button className="addButton"onClick={addMessages}> */}
              <button className="submitbtn" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
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
     
      width: auto;
      height: 100px;
      overflow: scroll;
      margin-top: 1rem;
    }
    `}</style>
    </Layout>
  );
}

export default App;
