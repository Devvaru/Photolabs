import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photoID, favouritePhotoIds, updateFavouritePhotoIds } = props;

  const handleClick = () => {
    updateFavouritePhotoIds(photoID);
  }

  const selected = favouritePhotoIds.includes(photoID);

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;