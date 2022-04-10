import React from 'react';
import { socialIcons } from './data';

export const renderMusicPlayer = (embedUrl) => {
	return (
		<div className='music-player-container'>
			<iframe
				style={{ borderRadius: '12px' }}
				src={embedUrl}
				width={'100%'}
				height={'380'}
				data-testid='music-player'
				frameBorder={'0'}
				allow={
					'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
				}
			></iframe>
		</div>
	);
};

export const getSocialIcon = (name) =>
	socialIcons.find((social) => social.name === name).icon;

export const getDateString = (date) =>
	new Date(date).toString().toString().split(' ').slice(1, 4).join(' ');
