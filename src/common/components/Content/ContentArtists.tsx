import React from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../../../types/spotifyTypes';
import { urlGenerator } from '../../../utils/helpers';

type Props = {
  artists: Artist[];
};

export default function ContentArtists({ artists }: Props) {
  return (
    <div>
      <div className="content__info__title">Artists</div>
      <div className="content__info__value">
        {artists.map((artist) => (
          <Link to={urlGenerator('artist', artist.id) ?? ''} key={artist.id}>
            <div className="chip">{artist.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
