import React from 'react';
import PropTypes from 'prop-types';
import PrimaryLink from '../PrimaryLink';

const ClassicLink = ({ title, url }) => {
	return (
		<a href={url} target='_blank'>
			<PrimaryLink title={title} classes='show-margin' />
		</a>
	);
};

ClassicLink.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
};

ClassicLink.defaultProps = {
	title: '',
	url: '',
};

export default ClassicLink;
