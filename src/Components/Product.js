import React, {useEffect, useState} from 'react'; 

export default function Product(props){

    const [count, setCount] = useState(0)

    const {details} = props 



    return (
        <div className="productArea" id={details.name}>
            <h5>{details.name}</h5>
            <br></br>
            <h5>{details.description}</h5>
            <h5>{details.id}</h5>
            <button onClick={props.addToCart}>buy</button>

        </div>


    )
}