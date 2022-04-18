import React from 'react';
import PropTypes from 'prop-types';

const SubLink = ({ logo, details, nav }) => {
	return (
		<div className='link-container' data-testid='sublink'>
			{/* show link logo */}
			{logo}
			{/* show link details */}
			<div className='link-content'>
				<div className='link-details'>{details}</div>
				{/* show link nav */}
				<div className='link-nav'>{nav}</div>
			</div>
		</div>
	);
};

SubLink.propTypes = {
	logo: PropTypes.object,
	details: PropTypes.object,
	nav: PropTypes.object,
};

export default SubLink;
