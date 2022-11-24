import React from 'react';
import './_title.scss';

export default function Title({ children }: { children: string }) {
  return (
    <div className="page-title">
      <h2>{children.toUpperCase()}</h2>
      <span />
    </div>
  );
}
