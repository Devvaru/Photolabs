import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert, onClick }) => {
  return (
    <div className='fav-badge' onClick={onClick}>
      <FavIcon
        displayAlert={!!displayAlert}
        selected={true} />
    </div>
  )
};

export default FavBadge;