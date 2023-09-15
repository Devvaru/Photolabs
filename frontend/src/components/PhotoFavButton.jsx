import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { favourite, changeFavourite } = props;
  const displayAlertValue = true;
  const selectedValue = favourite;

  const handleClick = () => changeFavourite();

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={displayAlertValue} selected={selectedValue}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;