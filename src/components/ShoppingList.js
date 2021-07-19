import React, {useState}from "react";
import Item from "./Item";
//import { useState } from "react";

function ShoppingList({ items}) {
  const[selectedCategory,selectedCategoryCb]=useState('All')
  const itemToChange=items.filter((item)=> {
    if(selectedCategory==='All')
    return true;
  else return item.category === selectedCategory})
  
  function filterer(event){
 
  
    selectedCategoryCb(event.target.value)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterer}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToChange.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
