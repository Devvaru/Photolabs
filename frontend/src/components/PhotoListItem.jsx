import React, { useCallback, useState } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { photo, isFavourited, changeFavourite, openModal } = props;
  const { id, location, urls, user } = photo;

  const handleClick = () => {
    console.log("Opening modal...");
    openModal();
  }

  return (
    <div onClick={handleClick} className="photo-list__item">

      {/* Favourite button and Image */}
      <div>
        <PhotoFavButton 
        photoID={id} 
        isFavourited={isFavourited}
        changeFavourite={changeFavourite} />
        <img className="photo-list__image" src={urls.regular} />
      </div>

      {/* Photo list item details*/}
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} />
        <div>
          <div className="photo-list__user-info">{user.name}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoListItem;
