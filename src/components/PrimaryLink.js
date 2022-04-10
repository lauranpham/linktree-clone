import React from 'react';

const PrimaryLink = ({ title, showMargin }) => {
	return (
		<button
			className={`${showMargin ? 'btn-primary show-margin' : 'btn-primary'}`}
		>
			{title}
		</button>
	);
};

export default PrimaryLink;
