import { createContext } from 'react';

const CartContext = createContext({
	items: [],
	addItemToCart: () => {},
	updateItemInCart: () => {},
});

export default CartContext;
