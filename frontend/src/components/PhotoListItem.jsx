import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const { photo, favouritePhotoIds, updateFavouritePhotoIds, displayModalPhotoDetails } = props;
  const { id, location, urls, user, similar_photos } = photo;

  // deconstructs photo properties to be displayed in modal
  const modalDisplay = () => {
    const { location, urls, user } = photo;
    const { full } = urls;
    const { username, name, profile } = user;
    const { city, country } = location;

    // sets items to be displayed
    displayModalPhotoDetails && displayModalPhotoDetails({ city, country, full, username, name, profile, similar_photos }, true);
  };

  return (
    <div className="photo-list__item">

      {/* Favourite button and Image  */}
      <div>
        <PhotoFavButton
          photoID={id}
          favouritePhotoIds={favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds} />
        <img onClick={modalDisplay} className="photo-list__image" src={urls.regular} />
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
