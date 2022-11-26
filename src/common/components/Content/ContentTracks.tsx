import React from 'react';
import { Link } from 'react-router-dom';
import { Track } from '../../../types/spotifyTypes';
import { urlGenerator } from '../../../utils/helpers';

type Props = {
  title: string;
  tracks: Track[];
};

export default function ContentTracks({ title, tracks }: Props) {
  return (
    <div>
      <div className="content__info__title">{title}</div>
      <div className="content__info__tracks custom-scrollbar">
        {tracks.map((track, index) => (
          <Link to={urlGenerator('track', track.id) ?? ''} key={track.id}>
            <div className="chip">
              <span>{index + 1}</span> {track.name} - {track.artists[0].name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
