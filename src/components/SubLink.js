import React from 'react';
import PropTypes from 'prop-types';

const SubLink = ({ logo, details, nav, url }) => {    
	return (
        <a href={url} target="_blank" className="link-container">
            {/* show link logo */}
            {logo && 
            <div className="icon-container">
                <img src={logo} alt="logo"/>
            </div>
            }
            {/* show link details */}
            <div className="link-content">
                <div className="link-details">
                    {details}
                </div>
                {/* show link nav */}
                <div className="link-nav">
                    {nav}
                </div>
            </div>
        </a>
	);
};

SubLink.propTypes = {
	date: PropTypes.string,
	location: PropTypes.string,
	url: PropTypes.string,
};

export default SubLink;
