import React from 'react';
import LoadingBar from '../../common/components/LoadingBar';
import './_loading.scss';

export default function LoadingRoute() {
  return (
    <div className="route-loading">
      <LoadingBar />
    </div>
  );
}
