import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import { Link, useMatch } from 'react-router-dom';

//TODO: Fix types here

type RenderSideBarOptionProps = {
  icon: IconDefinition;
  text: string;
  link?: string;
};

const RenderSideBarOption = ({ link, icon, text }: RenderSideBarOptionProps) => {
  const match = link ? useMatch(link) : false;
  return (
    <Link
      to={link ? link : '#'}
      onClick={(e) => !link && e.preventDefault()}
      className={!link ? 'disabled' : ''}>
      <div className={cx('sidebar__option', { 'sidebar__option--selected': !!match })}>
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default class SideBar extends React.Component {
  render = () => (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        <RenderSideBarOption link="/" icon={faHeadphonesAlt} text="Discover" />
        <RenderSideBarOption link="/search" icon={faSearch} text="Search" />
        <RenderSideBarOption icon={faHeart} text="Favourites" />
        <RenderSideBarOption icon={faPlayCircle} text="Playlists" />
        <RenderSideBarOption icon={faStream} text="Charts" />
      </div>
    </div>
  );
}
