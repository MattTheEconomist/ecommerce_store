import React, { useEffect, useState, useRef } from "react";

export default function Navbar(props) {
  const { itemBoughtAlert } = props;
  const [showBoughtText, setShowBoughtText] = useState(true);


  function scrollToBottom (){
      window.scrollTo(0,500)
  }



  useEffect(() => {
    let timer1 = setTimeout(() => setShowBoughtText(false), 1000);
    console.log(itemBoughtAlert);

    return () => {
      clearTimeout(timer1);
      setShowBoughtText(true);
    };
  }, [itemBoughtAlert]);

  return (
    <div id="navbar">
      {" "}
      <button onClick={scrollToBottom}>View Shopping Cart</button>
       <h5>{showBoughtText && "Item Added to Cart"}</h5>
    </div>
  );

}
