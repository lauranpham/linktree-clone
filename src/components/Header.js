import React from 'react';
import PropTypes from 'prop-types';
const Header = ({ image, title, bio }) => {
	// header consist of profile photo and profile name
	// if no img, set default
	return (
		<div className='header-section'>
			<div className='image-container'>
				<img src={image} alt={title} />
			</div>
			<h2 className='profile-name'>{title}</h2>
			<h3>{bio}</h3>
		</div>
	);
};

Header.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	bio: PropTypes.string,
};

export default Header;
