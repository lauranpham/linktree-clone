import React from 'react';
import ClassicLink from './links/ClassicLink';
import ShowsLink from './links/ShowsLink';
import MusicLink from './links/MusicLink';

// iterates through the users links and shows the correct button according to the link type
const Links = ({ links }) => {
	return (
		<div className='links-container'>
			{links.map((link) => {
                const {type} = link;
                if (type === "shows") {
                    return <ShowsLink {...link} />;
                } 
                if (type === 'music') {
                    return <MusicLink {...link}/>;
                }
                return <ClassicLink {...link} />;
				}
            )}
		</div>
	);
};

export default Links;
