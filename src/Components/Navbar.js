import React, { useEffect, useState, useRef } from "react";

export default function Navbar(props) {
  const { itemBoughtAlert } = props;
  const [showBoughtText, setShowBoughtText] = useState(true);

  function scrollToBottom() {
    window.scrollTo(0, 800);
  }

  useEffect(() => {
    let timer1 = setTimeout(() => setShowBoughtText(false), 2000);
    console.log(itemBoughtAlert);

    return () => {
      clearTimeout(timer1);
      setShowBoughtText(true);
    };
  }, [itemBoughtAlert]);

  return (
    <div id="navbar">
      {" "}
      <button id="viewCartBtn" onClick={scrollToBottom}>
        View Shopping Cart
      </button>
      
      {showBoughtText &&  <div id="itemAddAlert">
        <h5>Item Added to Cart</h5>
      </div>}
    </div>
  );
}
