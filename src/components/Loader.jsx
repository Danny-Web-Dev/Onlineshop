import React from 'react';

const Loader = ({ htmlFor }) => {
	return (
		<>
			<input type='checkbox' id={htmlFor} />
			<label className='loader-label' htmlFor={htmlFor}>
				<div className='icon'></div>
			</label>
		</>
	);
};

export default Loader;
