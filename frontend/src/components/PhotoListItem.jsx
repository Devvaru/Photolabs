import React, { useCallback, useState } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { id, location, imageSource, username, profile } = props;

  const [favourite, setFavourite] = useState(false);
  const changeFavourite = () => setFavourite((favourite === true) ? false : true);

  return (
    <div className="photo-list__item">
      <div >
        <PhotoFavButton favourite={favourite} changeFavourite={changeFavourite} />
        <img className="photo-list__image" src={imageSource} />
      </div>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div>
          <div className="photo-list__user-info">{username}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoListItem;
