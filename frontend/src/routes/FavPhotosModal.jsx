import React from 'react';

import '../styles/FavPhotosModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const FavPhotosModal = (props) => {

  const { photoData, favouritePhotoIds, closeFavouritesModal } = props;

  const favouritedPhotos = photoData.filter(photo => favouritePhotoIds.includes(photo.id));

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={closeFavouritesModal} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <div>
          <div className="photo-details-modal__header">Favourites</div>
          {favouritedPhotos.map(photo => (
            <div key={photo.id}>
              <img src={photo.urls.regular} className="photo-details-modal__image" />
              <div className="photo-details-modal__photographer-details photo-details-modal__header">
                <img src={photo.user.profile} className="photo-list__user-profile" />
                <div className="photo-list__user-info">
                  <p className="photo-list__user-info"> {photo.user.username}</p>
                  <p className="photo-list__user-info  photo-list__user-location">{photo.location.city} {photo.location.country} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default FavPhotosModal;
