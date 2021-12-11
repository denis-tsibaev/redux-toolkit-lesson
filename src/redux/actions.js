import { createAction } from '@reduxjs/toolkit';

export const addToCart = createAction('ADD_TO_CART');
export const removeFromCart = createAction('REMOVE_FROM_CART');
export const removeFromCatalog = createAction('REMOVE_FROM_CATALOG');
export const incrementCartItem = createAction('INCREMENT_CART_ITEM');
export const decrementCartItem = createAction('DECREMENT_CART_ITEM');
