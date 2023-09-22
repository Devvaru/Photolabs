import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photoID, isFavorited, updateFavouritePhotoIds } = props;
  const [favourite, setFavourite] = useState(isFavorited);

  const handleClick = () => {
    setFavourite(!favourite);
    updateFavouritePhotoIds(photoID);
  }

  return (
    <div onClick={handleClick} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favourite} />
      </div>
    </div>
  );
}

export default PhotoFavButton;