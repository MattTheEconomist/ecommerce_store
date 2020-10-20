import React, { useEffect, useState } from "react";
import Product from "./Product.js";
import ShoppingCart from './ShoppingCart.js'
import productData from "C:/Users/Admin/Documents/js/react/my-store/src/Data/ProductData.json";



export default function StoreFront(props) {
  const [productObject, setProductObject] = useState(productData);
  const [purchasedItems, setPurchasedItems] = useState({})
  const [stateChangeAlert, setStateChangeAlert] = useState(false)




useEffect(()=>{
    setPurchasedItems(productObject.filter(prod=>prod.inCart===true))
    // console.log(purchasedItems)
    setStateChangeAlert(false)
},[stateChangeAlert])






  return (
    <>
      <div id="storefront_area">
        {productObject.map((prod, val) => (
          <Product
            key={val}
            details={prod}
            addToCart={() => {
              //update inCart value to true for this particular product
              let productObjectClone = productObject;
              const singleProduct = productObjectClone[val];
              singleProduct.inCart = true;

              productObjectClone[val] = singleProduct;

              setProductObject(productObjectClone);
              setStateChangeAlert(true)

            }}
          />
        ))}
      </div>

      <div id="cartArea">
          <ShoppingCart purchasedItems={purchasedItems}  />
          
          </div>



    </>
  );
}
