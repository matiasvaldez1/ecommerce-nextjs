import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
        const productosEnLocalStorage = localStorage.getItem("cartProducts");
        return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : ["No products"];
        } catch (error) {
        return [];
        }
    });
    
    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);

    const AddItemToCart = (item) => {
        setCartItems((prevState) => {
        const inCart = prevState.find((cartItem) => cartItem.id === item.id);
        if (inCart) {
            return prevState.map((cartItem) =>
            cartItem.id === item.id
                ? {
                    ...cartItem,
                    amount: cartItem.amount + 1,
                }
                : cartItem
            );
        }
        return [...prevState, { ...item, amount: 1 }];
        });
    };

    const DeleteItemToCart = (itemId) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== itemId));
    };

    const value = {cartItems, AddItemToCart, DeleteItemToCart}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export default CartProvider;