import { useReducer } from "react";
import { CartContext } from "./CartContext";
import { cartReducer } from "../reducers/cartReducer";
import PropTypes from 'prop-types';

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const value = {
        state,
        dispatch,
        addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
        removeFromCart: (productId) => dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } }),
        incrementQuantity: (productId) => dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: productId } }),
        decrementQuantity: (productId) => dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: productId } }),
        clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}