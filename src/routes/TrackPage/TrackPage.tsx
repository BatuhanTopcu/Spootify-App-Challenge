import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentTitleValue from '../../common/components/ContentTitleValue';
import Title from '../../common/components/Title';
import { Track } from '../../types/spotifyTypes';
import { convertDateString, msToMinutesAndSeconds } from '../../utils/helpers';

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
          <ContentTitleValue title="Album" value={track.album.name} />
          <ContentTitleValue title="Release Date" value={convertDateString(track.album.release_date)} />
          <ContentTitleValue title="Duration" value={msToMinutesAndSeconds(track.duration_ms)} />
          <div>
            <div className="content__info__title">Artists</div>
            <div className="content__info__value">
              {track.artists.map((artist) => (
                <div className="chip" key={artist.id}>
                  {artist.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="content__info__title">Preview</div>
            <audio controls src={track.preview_url}>
              Your browser does not support the audio element.
            </audio>
          </div>
          <a href={track.external_urls.spotify} target="_blank" rel="noreferrer">
            <button className="spotify-button">Open on Spotify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
