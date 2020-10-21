import React, { useEffect, useState } from "react";
import Product from "./Product.js";
import ShoppingCart from "./ShoppingCart.js";
import Navbar from './Navbar.js'
import productData from "C:/Users/Admin/Documents/js/react/my-store/src/Data/ProductData.json";

export default function StoreFront(props) {
  const [productObject, setProductObject] = useState(productData);
  const [purchasedItems, setPurchasedItems] = useState({});
  const [stateChangeAlert, setStateChangeAlert] = useState(false);
  const [itemBoughtAlert, setItemBoughtAlert] = useState(false)

  useEffect(() => {
    setPurchasedItems(productObject.filter((prod) => prod.inCart === true));
    setStateChangeAlert(false);
    setItemBoughtAlert(false)
  }, [stateChangeAlert]);




  function removeFromCart(currentID){
    currentID = currentID - 1
    let productObjectClone = productObject;
    const singleProduct = productObjectClone[currentID];
    singleProduct.inCart = false;
    singleProduct.quantity = 0
    // console.log(singleProduct)

    productObjectClone[currentID] = singleProduct;

    setProductObject(productObjectClone);
    setStateChangeAlert(true);

    console.log(productObject)
    // console.log(stateChangeAlert)
    // console.log(productObject[currentID-1])
  }

  function incrementQuantity(currentID){
    currentID = currentID - 1
    let productObjectClone = productObject;
    const singleProduct = productObjectClone[currentID];
    singleProduct.quantity =  singleProduct.quantity+1
    // console.log(singleProduct)

    productObjectClone[currentID] = singleProduct;

    setProductObject(productObjectClone);
    setStateChangeAlert(true);

    console.log(productObject)

  }

  function decrementQuantity(currentID){
    currentID = currentID - 1
    let productObjectClone = productObject;
    const singleProduct = productObjectClone[currentID];
    let currentQuantity =  singleProduct.quantity;
    if(currentQuantity<=1){
      return null
    }
    singleProduct.quantity =  singleProduct.quantity-1
    // console.log(singleProduct)

    productObjectClone[currentID] = singleProduct;

    setProductObject(productObjectClone);
    setStateChangeAlert(true);

    console.log(productObject)

  }

  return (
    <>
    <Navbar itemBoughtAlert={itemBoughtAlert}/>
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
              singleProduct.quantity =1

              productObjectClone[val] = singleProduct;

              setProductObject(productObjectClone);
              setStateChangeAlert(true);
              setItemBoughtAlert(true)
            }}
          />
        ))}
      </div>

      <div id="cartArea">
        <ShoppingCart purchasedItems={purchasedItems} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
      </div>
      <div id="footer"></div>
    </>
  );
}
