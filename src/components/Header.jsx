import { useRef } from 'react';

import CartModal from './CartModal.jsx';

const Header = ({ cart }) => {
	const modal = useRef();

	const cartQuantity = cart.items.length;

	const handleOpenCartClick = () => {
		modal.current.open();
	};

	let modalActions = <button>Close</button>;

	if (cartQuantity > 0) {
		modalActions = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<CartModal ref={modal} cartItems={cart.items} title='Your Cart' actions={modalActions} />
			<header id='main-header'>
				<div id='main-title'>
					<img src='logo.png' alt='Elegant model' />
					<h1>Elegant Context</h1>
				</div>
				<p>
					<button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
				</p>
			</header>
		</>
	);
};

export default Header;
