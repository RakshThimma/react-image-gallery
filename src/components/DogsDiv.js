function DogsDiv(props) {
    return(
      
        <div className="dogs">
          <img className="image" src={props.image} alt="dog" />
          <h3 className="name">{props.name}</h3>
        </div>
    
    )
}

export default DogsDiv