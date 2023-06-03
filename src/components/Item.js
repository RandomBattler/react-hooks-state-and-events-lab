import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState("");
  
  function addRemove(){
    setCart((inCart === "")? "in-cart" : "");
  }

  const btnText = (inCart === "")? "Add to Cart": "Remove From Cart";
  const btnClass = (inCart === "")? "add": "remove"

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={addRemove}>{btnText}</button>
    </li>
  );
}

export default Item;
