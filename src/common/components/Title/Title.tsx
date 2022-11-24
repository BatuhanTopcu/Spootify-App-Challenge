import React from 'react';
import './_title.scss';

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className ? 'page-title ' + className : 'page-title'}>
      <h2>{children}</h2>
      <div className="divider" />
    </div>
  );
}
