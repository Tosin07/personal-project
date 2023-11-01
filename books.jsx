function Books({author,image,title,year}) {
  return (
    <div className="books-class">
        <img src={image} style={{width:""}}></img>
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{year}</p>
    </div>
  )
}

export default Books