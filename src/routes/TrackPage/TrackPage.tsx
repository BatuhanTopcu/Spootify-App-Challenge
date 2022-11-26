import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ContentTitleValue from '../../common/components/Content';
import Title from '../../common/components/Title';
import { Track } from '../../types/spotifyTypes';
import { convertDateString, msToMinutesAndSeconds, urlGenerator } from '../../utils/helpers';

export default function TrackPage() {
  const track = useLoaderData() as Track;
  return (
    <div className="page-container">
      <Title className="blue">
        {track.name} <span>{track.artists[0].name}</span>
      </Title>
      <div className="content">
        <img className="content__cover-image" src={track.album.images[0].url} alt={track.name} />
        <div className="content__info">
          <ContentTitleValue
            title="Album"
            value={track.album.name}
            link={urlGenerator('album', track.album.id) ?? ''}
          />
          <ContentTitleValue title="Release Date" value={convertDateString(track.album.release_date)} />
          <ContentTitleValue title="Duration" value={msToMinutesAndSeconds(track.duration_ms)} />
          <div>
            <div className="content__info__title">Artists</div>
            <div className="content__info__value">
              {track.artists.map((artist) => (
                <Link to={urlGenerator('artist', artist.id) ?? ''} key={artist.id}>
                  <div className="chip">{artist.name}</div>
                </Link>
              ))}
            </div>
          </div>
          {track.preview_url && (
            <ContentTitleValue title="Duration" value={<audio controls src={track.preview_url} />} />
          )}
          <a href={track.external_urls.spotify} target="_blank" rel="noreferrer">
            <button className="spotify-button">Open on Spotify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
