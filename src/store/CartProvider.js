import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updateTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCarItemIndex = state.items.findIndex(
            (state) => state.id === action.item.id
        );

        const existingCarItem = state.items[existingCarItemIndex];
        let updateItems;

        if (existingCarItem) {
            const updateItem = {
                ...existingCarItem,
                amount: existingCarItem.amount + action.item.amount,
            };
            updateItems = [...state.items];
            updateItems[existingCarItemIndex] = updateItem;
        } else {
            updateItems = state.items.concat(action.item);
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCarItemIndex = state.items.findIndex(
            (state) => state.id === action.id
        );

        const existingItem = state.items[existingCarItemIndex];
        const updateTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCarItemIndex] = updatedItem;
        };

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
