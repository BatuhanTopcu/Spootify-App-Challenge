import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentTitleValue from '../../common/components/Content';
import ContentTracks from '../../common/components/Content/ContentTracks';
import Title from '../../common/components/Title';
import { CustomArtist } from '../../types/spotifyTypes';

export default function ArtistPage() {
  const artist = useLoaderData() as CustomArtist;
  return (
    <div className="page-container">
      <Title className="blue">{artist.name}</Title>
      <div className="content">
        <img className="content__cover-image" src={artist.images[0].url} alt={artist.name} />
        <div className="content__info">
          <ContentTitleValue title="Followers" value={artist.followers.total} />
          {artist.genres.length > 0 && (
            <div>
              <div className="content__info__title">Genres</div>
              <div className="content__info__value">
                {artist.genres.map((genre) => (
                  <div className="chip" key={genre}>
                    {genre}
                  </div>
                ))}
              </div>
            </div>
          )}
          <ContentTracks title="Top Tracks" tracks={artist.top_tracks} />
          <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
            <button className="spotify-button">Open on Spotify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
