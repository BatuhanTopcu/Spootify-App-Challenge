import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DiscoverItem from './DiscoverItem';
import '../styles/_discover-block.scss';
import { SpotifyImage } from '../../../../../types/spotifyTypes';

//TODO: Fix types here

const scrollContainer = (id: string, { isNegative }: { isNegative?: boolean } = {}) => {
  return () => {
    const scrollableContainer = document.getElementById(id);
    if (!scrollableContainer) return;
    const amount = isNegative ? -scrollableContainer.offsetWidth : scrollableContainer.offsetWidth;
    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
};

interface IDiscoverBlockProps<T extends Record<string, unknown>, K extends keyof T> {
  text: string;
  id: string;
  imagesKey: T[K] extends SpotifyImage[] ? K : never;
  data: T extends Record<'name', string> & Record<K, SpotifyImage[]> ? T[] : never;
}

export default class DiscoverBlock<
  T extends Record<string, unknown>,
  K extends keyof T = 'images'
> extends React.Component<IDiscoverBlockProps<T, K>> {
  static defaultProps = {
    imagesKey: 'images',
  };
  render = () => {
    const { text, id, data, imagesKey } = this.props;
    return (
      <div className="discover-block">
        <div className="discover-block__header">
          <h2>{text}</h2>
          <span />
          {data.length ? (
            <div className="animate__animated animate__fadeIn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon icon={faChevronRight} onClick={scrollContainer(id)} />
            </div>
          ) : null}
        </div>
        <div className="discover-block__row" id={id}>
          {data.map((singleData) => (
            <DiscoverItem key={singleData.name} images={singleData[imagesKey]} name={singleData.name} />
          ))}
        </div>
      </div>
    );
  };
}
