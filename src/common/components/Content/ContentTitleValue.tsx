import React from 'react';
import { Link } from 'react-router-dom';
import { formatNumberString } from '../../../utils/helpers';

type Props = {
  title: string;
  value: React.ReactNode;
  link?: string;
};

export default function ContentTitleValue({ title, value, link }: Props) {
  const v = typeof value === 'number' ? formatNumberString(value) : value;
  return (
    <div>
      <div className="content__info__title">{title}</div>
      {link ? (
        <div className="content__info__value">
          <Link to={link}>{v}</Link>
        </div>
      ) : (
        <div className="content__info__value">{v}</div>
      )}
    </div>
  );
}
