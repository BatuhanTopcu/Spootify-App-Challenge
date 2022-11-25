import React from 'react';

type Props = {
  title: string;
  value: React.ReactNode;
};

export default function ContentTitleValue({ title, value }: Props) {
  return (
    <div>
      <div className="content__info__title">{title}</div>
      <div className="content__info__value">{value}</div>
    </div>
  );
}
