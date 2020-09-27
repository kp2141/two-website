import React from "react"

const Card = ({title = "Basketball", buttonText = "My Button", randomText = "hello" ,imageurl = " "}) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
              <img
                src={imageurl}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{randomText}</p>
                <a href="#" className="btn btn-success">{buttonText}</a>
              </div>
            </div>
    )
}
export default Card