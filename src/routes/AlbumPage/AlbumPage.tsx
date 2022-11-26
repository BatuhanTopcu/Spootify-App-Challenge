import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ContentTitleValue from '../../common/components/Content';
import Title from '../../common/components/Title';
import { Album } from '../../types/spotifyTypes';
import { convertDateString, urlGenerator } from '../../utils/helpers';

export default function AlbumPage() {
  const album = useLoaderData() as Album;
  return (
    <div className="page-container">
      <Title className="blue">
        {album.name} <span>{album.artists[0].name}</span>
      </Title>
      <div className="content">
        <img className="content__cover-image" src={album.images[0].url} alt={album.name} />
        <div className="content__info">
          <ContentTitleValue title="Release Date" value={convertDateString(album.release_date)} />
          <ContentTitleValue title="Total Tracks" value={album.total_tracks} />
          <div>
            <div className="content__info__title">Artists</div>
            <div className="content__info__value">
              {album.artists.map((artist) => (
                <Link to={urlGenerator('artist', artist.id) ?? ''} key={artist.id}>
                  <div className="chip">{artist.name}</div>
                </Link>
              ))}
            </div>
          </div>
          <a href={album.external_urls.spotify} target="_blank" rel="noreferrer">
            <button className="spotify-button">Open on Spotify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
