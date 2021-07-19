import React, { useState } from "react";

function Item({ name, category }) {
 const [inCart,setCart]=useState(false)
 const appClass=inCart? 'in-cart':""
function cartClick(){
  setCart((inCart)=>!inCart)
}
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
