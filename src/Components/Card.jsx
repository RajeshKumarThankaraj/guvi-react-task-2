import React,{useState} from 'react'
import Image from "../images/image1.jpg";


const Card = (props) => {

  const [cartAdd, setCartAdd] = useState(false)

  const cartButton = () => {
    setCartAdd(!cartAdd)
    cartAdd ? props.handleRemove() : props.handleSubmit();
  }

  return (
    <div className="card m-1" style={{ width: "18rem" }}>
          <img src={Image} className="card-img-top" alt="Animal_Image" />
          {props.cardData.badge ? <span className="badge bg-dark">Sale</span> : null}
          <div className="card-body text-center">
            <h5 className="card-title">{props.cardData.cardTitle}</h5>
            {props.cardData.rating > 0 ? Array.from({length: props.cardData.rating}).map((_,id) => (
              <i className="bi bi-star-fill yellow-color"></i>
            )) : "" }
            {props.cardData.disCountPrice ? <p className="card-text"><span className='text-decoration-line-through text-muted'>{props.cardData.price}</span> {props.cardData.disCountPrice}</p> : 
            <p className="card-text">{props.cardData.price}</p>}
            
          </div>
          <div className="card-footer border-0 text-center" style={{ backgroundColor: "#FFF" }}>
          {props.cardData.btnText === "View Options"  ? 
            <button className="btn btn-outline-secondary">
              {props.cardData.btnText}
            </button>
            : <button className="btn btn-outline-secondary" onClick={cartButton}>
              {cartAdd ? 'Remove from Cart' : props.cardData.btnText}
            </button>}
          </div>
        </div>
  )
}

export default Card