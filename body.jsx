import { useState } from "react"

function Body (props) {
    
   const [movietitle, setMovieStar] = useState("")
   const [mouseOver, setMouseOver] = useState(false)

   function handleChange () {
    setMovieStar(props.title)
   }

   function handleMouseOver () {
     setMouseOver(!mouseOver)
   }

   function handleMouseOut () {
     setMouseOver(false)
   }

 return(
    <div className="body">
        <img src={props.image}></img>
        <h1>{movietitle}</h1>
        <p>{props.year}</p>
        <p>{props.director}</p>
        <button style={{backgroundColor: mouseOver? "gray" : "yellow"}} 
        onMouseOver={handleMouseOver} 
        onClick={handleChange}
        onMouseOut={handleMouseOut}>{props.button}</button>
    </div>
 )
}


export default Body