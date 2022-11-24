import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Title from '../../common/components/Title';
import { Track } from '../../types/spotifyTypes';

export default function TrackPage() {
  const track = useLoaderData() as Track;
  return (
    <Title className="blue">
      {track.name} <span>{track.artists[0].name}</span>
    </Title>
  );
}
