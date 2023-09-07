import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="card h-100">
          <img className="card-img-top m-auto" src={props.img} alt="Card " />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
             {props.desc}
            </p>
            <h4>{props.price} $</h4>
            {props.displayBtn&&<Link to={`/products/${props.id}`} className="btn btn-primary" onClick={()=>{console.log("test");}}>
             View Details
            </Link>}
            
          </div>
        </div>
      </div>
    </>
  );
}
