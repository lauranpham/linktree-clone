import React from 'react';

const PrimaryLink = ({ title, classes}) => {
	return (
		<button
			className={`btn-primary ${classes}`}
		>
			{title}
		</button>
	);
};

export default PrimaryLink;
