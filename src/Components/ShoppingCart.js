import React, { useEffect, useState } from "react";

export default function ShoppingCart(props) {
  const { purchasedItems } = props;

  // const [productsBought, setProductsBought] = useState(purchasedItems)

  // useEffect(()=>{
  //     setProductsBought(purchasedItems)
  //     console.log(productsBought)

  // }, [purchasedItems]}



//   console.log(purchasedItems);

  let itemList = []
  
  if(purchasedItems.length>0){
     itemList =  purchasedItems.map(prod=> prod.name)}

  console.log(itemList);
  



  return (
    <>
      {/* <ul>
        {purchasedItems.map((prod) => (
          <li>{prod.name}</li>
        ))}
      </ul> */}
    </>
  );
}
