import React from 'react';
import PropTypes from 'prop-types';
import Accordian from '../Accordian';
import SubLink from '../SubLink';
import { FaChevronRight } from 'react-icons/fa';
import PrimaryLink from '../PrimaryLink';
import { getDateString } from '../../utils';

const songKickLogo = (
	<div className='songkick-logo-container'>
		<img src='assets/icons/by-songkick-wordmark.svg' alt='songkick' />
	</div>
);

const renderShow = (show) => {
	const { id, date, location, url, status } = show;
	const showDetails = (
		<>
			<h6>{getDateString(date)}</h6>
			<p>{location}</p>
		</>
	);
	const showLink =
		status === 'ok' ? (
			<a href={url} target='_blank'>
				<FaChevronRight />
			</a>
		) : (
			<p>{status}</p>
		);
	return <SubLink key={id} details={showDetails} nav={showLink} url={url} />;
};

const ShowsLink = ({ shows, title }) => {
	// ShowsLink displays a list of links to upcoming shows
	const header = <PrimaryLink title={title} />;
	const showsList =
		shows.length > 0 ? (
			shows
				.sort((a, b) => new Date(a.date) - new Date(b.date))
				.map((show) => {
					return renderShow(show);
				})
		) : (
			<h6 className='text-container'>no available shows</h6>
		);
	return (
		<Accordian header={header} content={showsList} footer={songKickLogo} />
	);
};

ShowsLink.propTypes = {
	shows: PropTypes.array,
	title: PropTypes.string,
};

ShowsLink.defaultProps = {
	shows: [],
	title: '',
};

export default ShowsLink;
