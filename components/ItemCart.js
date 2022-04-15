import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";


export const ItemCart = ({ item }) => {
  const {DeleteItemToCart} = useContext(CartContext)
  return (
    <div>
      <div className="flex justify-evenly w-40">
        <img className="h-12 w-12" src={item.image} alt={item.title} />
        <button onClick={() => DeleteItemToCart(item.id)}>❌</button>
      </div>
      <div>
        <div>
          <p className="max-w-fit">{item.title}</p>
        </div>
        <div>
          <div>Amount: {item.amount}</div>
          <p>Product total: ${item.amount * item.price}</p>
        </div>
      </div>
      <hr className="my-1" />
    </div>
  );
};