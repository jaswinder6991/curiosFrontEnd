// import Layout from "../components/layout"
// import $ from 'jquery'; 

// const chatbox = () => {
//   function getBotResponse() {
//     var rawText = $("#textInput").val();
//     var userHtml = '<p class="userText"><span>' + rawText + "</span></p>";
//     $("#textInput").val("");
//     $("#chatbox").append(userHtml);
//     document.getElementById("userInput").scrollIntoView({ block: "start", behavior: "smooth" });
//     $.get("/get", { msg: rawText }).done(function(data) {
//       var botHtml = '<p class="botText"><span>' + data + "</span></p>";
//       $("#chatbox").append(botHtml);
//       document.getElementById("userInput").scrollIntoView({ block: "start", behavior: "smooth" });
//     });
//   }
//   $("#textInput").keypress(function(e) {
//     if (e.which == 13) {
//       getBotResponse();
//     }
//   });
//     return (
// <>
//   <Layout>
//   <center>
//       <h1>
//         <img
//           src="https://user-images.githubusercontent.com/20112458/49326597-773b7280-f57a-11e8-853d-20ed61d18b0d.png"
//           alt="CANDICE"
          
//         />Hi! Welcome to Curiosity, this is a GPT-3 enabled Q/A platform. Ask away anything!
//       </h1>
//     </center>
//     <div class="box"></div>
//     <div class="boxed">
//         <div>
//             <div id="chatbox">
//                 <img src="https://user-images.githubusercontent.com/20112458/49326597-773b7280-f57a-11e8-853d-20ed61d18b0d.png"
//                      alt="CANDICE"
                     
//                 />
//                 <p class="botText">
//                     <span>Hi! I am Jay and I love talking about carbon markets. Ask me anything about them!</span>
//                 </p>
//             </div>
//             <div id="userInput">
//                 <input id="textInput" type="text" name="msg" placeholder="Message" />
//             </div>
//             <button>
//               Submit
//             </button>
//         </div>
//     </div>
//     <script>{`
//         function getBotResponse() {
//           var rawText = $("#textInput").val();
//           var userHtml = '<p class="userText"><span>' + rawText + "</span></p>";
//           $("#textInput").val("");
//           $("#chatbox").append(userHtml);
//           document.getElementById("userInput").scrollIntoView({ block: "start", behavior: "smooth" });
//           $.get("/get", { msg: rawText }).done(function(data) {
//             var botHtml = '<p class="botText"><span>' + data + "</span></p>";
//             $("#chatbox").append(botHtml);
//             document.getElementById("userInput").scrollIntoView({ block: "start", behavior: "smooth" });
//           });
//         }
//         $("#textInput").keypress(function(e) {
//           if (e.which == 13) {
//             getBotResponse();
//           }
//         });`}
//         </script>
//   </Layout>
// </>
// )
// }

// export default chatbox