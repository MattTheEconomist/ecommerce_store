import React, {useEffect, useState} from 'react'; 

export default function Product(props){

    

    const {details} = props 



    return (
        <div className="productArea" id={details.name}>
            <h5 className="productName ">{details.name}</h5>
            <img className="productImage"src={details.image__1}></img>
            <div className="productDescription">
            <h5 >{details.description}</h5>
            </div>
            <button className="buyButton" onClick={props.addToCart}>Buy</button>

        </div>


    )
}