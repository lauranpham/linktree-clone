import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import MusicLink from '../links/MusicLink';

test('When a user clicks on a Music Player Link, the Spotify streaming platform is visible', () => {
  render(
    <MusicLink title="music button" embedUrl="https://open.spotify.com/embed/album/2HPj0XZe9WduSsyKTQqgVa?utm_source=generator"/>
  );
  const accordianButton = screen.getByText('music button');
  expect(accordianButton).toBeInTheDocument();
  fireEvent.click(accordianButton);

  const musicPlayer = screen.getByTestId('music-player')
  expect(musicPlayer).toBeInTheDocument();
});