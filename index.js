import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./project.css";
import { movies } from "./folder/moviefolder";
import Books from "./components/books";
import { books } from "./folder/bookfolder";

// function Best() {
//   const [mouseOver, setMouseOver] = useState(false)
//   const [headingText, setHeadingText] = useState("")
//   const [fullName, setFullName] = useState({
//     fName: "",
//     lName: ""
//   })
//   // const [lName, setLName] = useState("")

//   function updateFName (event) {
//   //    const inputName = event.target.name
//   // const value = event.target.value
//   //   setFullName((prevValue) => {
//   //     if (inputName==='fName') {
//   //       return {
//   //         fName : value,
//   //         lName: prevValue.lName
//   //       }
//   //     } else {
//   //       return {
//   //         fName: prevValue.fName,
//   //         lName: value
//   //       }

//   //     }
//   //   })
//       const {name, value} = event.target
//       setFullName((prevValue)=>{
//         return {
//           ...prevValue,
//           [name]: value
//         }
//       })
//   }

//   function handleMouseOver () {
//   setMouseOver(true)
// }

// // function newName(event) {
// //   const FName = event.target.value
// //   setFName(FName)
// // }
// // function newNom(event) {
// //   const LName = event.target.value
// //    setLName(LName)
// // }

// function handleClick () {
//   setHeadingText("")
//  }
// function handleMouseOut() {
//   setMouseOver(false)
// }

//  return(
//   <div>
//     <h1>Hello {headingText} {fullName.fName} {fullName.lName}</h1>
//     <input onChange={updateFName} name="fName" type="text" placeholder="type in your name"></input>
//     <input onChange={updateFName} name="lName" type="text" placeholder="type in your name"></input>

//     <button style={{ backgroundColor: mouseOver ? "blue" : "red"}}
//     onMouseOver={handleMouseOver}
//     onMouseOut={handleMouseOut}
//     onClick={handleClick}> Submit
//     </button>
//     </div>

//  )
// }

function Best() {
  let bText = "SHOW ME MOVIE TITLE";

  return (
    <div className="project_parent">
      <Header />

      <h1>FAVOURITE MOVIES</h1>

      <div className="project">
         {movies.map((movie, index) => {
          return <Body button={bText} key={index} {...movie} />;
        })}
      </div>

      <h1>FAVOURITE BOOKS</h1>
      <div className="project-books">
        {books.map((book, index) => {
        return <Books {...book} key={index} />;
      })}
      </div>

      
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Best />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
