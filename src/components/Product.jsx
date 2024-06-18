import { useContext, useState } from 'react';
import CartContext from '../store/shopphingCartContext';
import Loader from './Loader';

const Product = ({ id, image, title, price, description }) => {
	const [activateLoader, setActivateLoader] = useState(false);
	const { addItemToCart } = useContext(CartContext);

	const handleClick = () => {
		setActivateLoader(true);
		setTimeout(() => {
			document.getElementById('check').checked = true;
			setTimeout(() => {
				addItemToCart(id);
				setActivateLoader(false);
			}, 1000);
		}, 3000);
	};

	return (
		<article className='product'>
			<img src={image} alt={title} />
			<div className='product-content'>
				<div>
					<h3>{title}</h3>
					<p className='product-price'>${price}</p>
					<p>{description}</p>
				</div>
				<p className='product-actions'>
					<button
						className='add-to-cart-btn'
						onClick={() => {
							handleClick(true);
						}}>
						{activateLoader ? <Loader htmlFor='check' /> : 'Add to Cart'}
					</button>
				</p>
			</div>
		</article>
	);
};

export default Product;
