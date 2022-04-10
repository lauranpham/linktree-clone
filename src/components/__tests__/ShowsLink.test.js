import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ShowsLink from '../links/ShowsLink';

const shows = [
	{
		id: '1',
		date: '2022-04-18',
		location: 'The Forum, Melbourne',
		status: 'ok',
		link: '',
		url: 'https://www.songkick.com/',
	},
	{
		id: '2',
		date: '2022-05-19',
		location: 'Venue Name, Canberra',
		status: 'sold out',
		link: '',
		url: 'https://www.songkick.com/',
	},
	{
		id: '3',
		date: '2022-04-20',
		location: 'Venue Name, Sydney',
		status: 'ok',
		link: '',
		url: 'https://www.songkick.com/',
	},
];

test('When a user clicks on the Shows List Link, a list of X shows are visible', () => {
	render(<ShowsLink title='music button' shows={shows} />);
	const accordianButton = screen.getByText('music button');
	expect(accordianButton).toBeInTheDocument();
	fireEvent.click(accordianButton);
	const showLinks = screen.getAllByTestId('sublink');
	expect(showLinks).toHaveLength(shows.length);
});
