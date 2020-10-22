import React, { useEffect, useState } from "react";

export default function ShoppingCart(props) {
  const {
    purchasedItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  } = props;

  let subTotalCost = 0;
  if (purchasedItems.length > 0) {
    subTotalCost = purchasedItems.reduce(function(accumulator, currentValue) {
      return accumulator + (currentValue.quantity*currentValue.price);
    }, 0)
  }

  let purchaseTable = "";

  if (purchasedItems.length > 0) {
    purchaseTable = purchasedItems.map((prod) => (
      <tr key={prod.id}>
        <td className="itemCell">{prod.name}</td>
        <td className="itemCell">{prod.price}</td>
        <td className="itemCell">
          {
            <button className="shoppingCartBtn"
              value={prod.id}
              onClick={(e) => incrementQuantity(e.target.value)}
            >
              Add
            </button>
          }
        </td>
        <td className="itemCell">{prod.quantity}</td>
        <td className="itemCell">
          {
            <button className="shoppingCartBtn"
              value={prod.id}
              onClick={(e) => decrementQuantity(e.target.value)}
            >
              Subtract
            </button>
          }
        </td>
        <td className="itemCell">
          {
            <button className="shoppingCartBtn"
              value={prod.id}
              onClick={(e) => removeFromCart(e.target.value)}
            >
              Remove
            </button>
          }
        </td>
        
        <td>{(prod.quantity * prod.price).toFixed(2)}</td>
      </tr>
    ));

    //  console.log(itemList);
  }

  //   console.log(itemList);

  return (
    <div id="shoppingCartArea">
      <table>
        <tbody>
        <tr>
          <th colSpan="7" id="shoppingCartHeader">Items Purchased</th>
       
        </tr>
        <tr className="blankRow"> </tr>
        {purchaseTable}
        <tr className="blankRow"> </tr>
        <tr><td></td><td></td><td></td><td></td><td>SubTotal</td><td></td>{subTotalCost.toFixed(2)}</tr>
        <tr><td></td><td></td><td></td><td></td><td>Total (incl. 5% Tax)</td><td></td>{(subTotalCost*1.05).toFixed(2)}</tr>
        </tbody>
      </table>

    </div>
  );
}
