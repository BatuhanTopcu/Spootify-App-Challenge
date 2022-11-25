import React from 'react';
import { Link } from 'react-router-dom';
import { SpotifyImage } from '../../../../../types/spotifyTypes';
import '../styles/_discover-item.scss';

//TODO: Fix types here
interface IDiscoverItemProps {
  images: Array<SpotifyImage>;
  name: string;
  url?: string | null;
}

export default class DiscoverItem extends React.Component<IDiscoverItemProps> {
  render = () => {
    const { images, name, url } = this.props;
    return (
      <div className="discover-item animate__animated animate__fadeIn">
        <Link to={url ?? ''} onClick={(e) => !url && e.preventDefault()}>
          <div
            className="discover-item__art"
            style={{ backgroundImage: images.length > 0 ? `url(${images[0].url})` : '' }}
          />
          <p className="discover-item__title">{name}</p>
        </Link>
      </div>
    );
  };
}
