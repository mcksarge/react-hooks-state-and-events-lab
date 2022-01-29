import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleItem() {
    setInCart((inCart) => !inCart)
  }

  const cart = inCart ? "in-cart" : "";
  const addCart = inCart ? "Remove from cart" : "Add to cart";
  const cartButton = inCart ? "remove" : "add"

    return (
      <li className={cart}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className={cartButton} onClick={handleItem}>{addCart}</button>
      </li>
    );
}

export default Item;
