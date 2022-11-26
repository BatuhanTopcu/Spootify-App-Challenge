import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentTitleValue from '../../common/components/Content';
import ContentTracks from '../../common/components/Content/ContentTracks';
import Title from '../../common/components/Title';
import { SinglePlaylist } from '../../types/spotifyTypes';

export default function PlaylistPage() {
  const playlist = useLoaderData() as SinglePlaylist;
  const tracks = playlist.tracks.items.map((item) => item.track);
  return (
    <div className="page-container">
      <Title className="blue">
        {playlist.name} <span>{playlist.owner.display_name}</span>
      </Title>
      <div className="content">
        <img className="content__cover-image" src={playlist.images[0].url} alt={playlist.name} />
        <div className="content__info">
          <ContentTitleValue title="Total Tracks" value={playlist.tracks.total} />
          <ContentTracks title="Tracks" tracks={tracks} />
          <a href={playlist.external_urls.spotify} target="_blank" rel="noreferrer">
            <button className="spotify-button">Open on Spotify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
