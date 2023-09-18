import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { photoID, isFavorited, changeFavourite } = props;
  const [favourite, setFavourite] = useState(isFavorited);

  const handleClick = () => {
    setFavourite(!favourite);
    changeFavourite(photoID);
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