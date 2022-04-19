import React from 'react';
import ClassicLink from './links/ClassicLink';
import ShowsLink from './links/ShowsLink';
import MusicLink from './links/MusicLink';

const renderLink = (type, link) => {
	if (type === 'shows') {
		return <ShowsLink {...link} />;
	}
	if (type === 'music') {
		return <MusicLink {...link} />;
	}
	return <ClassicLink {...link} />;
};

// iterates through the users links and shows the correct button according to the link type
const Links = ({ links }) => {
	return (
		<div className='links-container'>
			{links.map((link) => {
				const { type } = link;
				return <div key={link.id}>{renderLink(type, link)}</div>;
			})}
		</div>
	);
};

export default Links;
