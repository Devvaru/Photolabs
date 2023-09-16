import React, { useCallback, useState } from 'react';
import PhotoFavButton from 'components/PhotoFavButton';

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { id, location, urls, user } = props;

  const [favourite, setFavourite] = useState(false);
  const changeFavourite = () => setFavourite((favourite === true) ? false : true);

  return (
    <div className="photo-list__item">

      {/* Favourite button and Image */}
      <div>
        <PhotoFavButton favourite={favourite} changeFavourite={changeFavourite} />
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
