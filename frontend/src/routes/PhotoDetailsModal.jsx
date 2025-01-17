import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {

  const { onClosePhotoDetailsModal, displayModal, displayModalDetails, favouritePhotoIds, updateFavouritePhotoIds } = props;

  const similarPhotos = Object.values(displayModalDetails.similar_photos);

  return (
    <div className="photo-details-modal">

      <button onClick={onClosePhotoDetailsModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <img src={displayModalDetails.full} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details photo-details-modal__header">
          <img src={displayModalDetails.profile} className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <p className="photo-list__user-info"> {displayModalDetails.username}</p>
            <p className="photo-list__user-info  photo-list__user-location">{displayModalDetails.city} {displayModalDetails.country} </p>
          </div>
        </div>

        <div>
          <div className="photo-details-modal__header">Similar Photos</div>
          <PhotoList
            favouritePhotoIds={favouritePhotoIds}
            updateFavouritePhotoIds={updateFavouritePhotoIds}
            photoData={similarPhotos}
            displayModalDetails={displayModalDetails}
            displayModal={displayModal}
            onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
