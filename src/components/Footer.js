import React from 'react';
const logo = '../../assets/logo.svg';

const Footer = () => {
	// Footer consist of linktree logo
	return (
		<>
			<div className='footer-container'>
				<img src={logo} alt='logo' className='logo' />
			</div>
		</>
	);
};

export default Footer;
