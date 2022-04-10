import React from 'react';
import PropTypes from 'prop-types';
import Accordian from '../Accordian';
import SubLink from '../SubLink';
import { FaChevronRight } from 'react-icons/fa';
import PrimaryLink from '../PrimaryLink';
import { renderMusicPlayer, getSocialIcon } from '../../utils';

const renderMusicService = (service) => {
	const { id, name, url } = service;
	const musicDetails = <h5 classLink='link-details'>{name}</h5>;
	const musicLink = (
		<a href={url} target='_blank'>
			<FaChevronRight />
		</a>
	);
	const logo = getSocialIcon(name);
	return (
		<SubLink key={id} logo={logo} details={musicDetails} nav={musicLink} />
	);
};

const MusicLink = ({ services, title, embedUrl }) => {
	// MusicLink displays a list of links to upcoming shows
	const header = <PrimaryLink title={title} />
	const musicList = services.length > 0 ? services.map((service) => {
		return renderMusicService(service);
	}) : <h6 className="text-container">no available streaming services</h6>;
	const musicContent = (
		<>
			{embedUrl && renderMusicPlayer(embedUrl)}
			{musicList}
		</>
	);
	return (
		<Accordian header={header} content={musicContent} />
	);
};

MusicLink.propTypes = {
	services: PropTypes.array.isRequired,
	title: PropTypes.string,
	embedUrl: PropTypes.string,
};

MusicLink.defaultProps = {
	services: [],
    title: "",
}

export default MusicLink;
