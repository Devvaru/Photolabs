import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {

  const { onClosePhotoDetailsModal, photoData, favouritePhotoIds, updateFavouritePhotoIds } = props;

  const similarPhotos = Object.values(photoData.similar_photos);

  return (
    <div className="photo-details-modal">

      <button onClick={onClosePhotoDetailsModal} className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div>
        <img src={photoData.full} className="photo-details-modal__image" />
      </div>
      <div className="photo-details-modal__photographer-details photo-details-modal__header">
        <img src={photoData.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p className="photo-list__user-info"> {photoData.username}</p>
          <p className="photo-list__user-info  photo-list__user-location">{photoData.city} {photoData.country} </p>
        </div>
      </div>

      <div>
        <PhotoList
          photos={similarPhotos}
          favouritePhotoIds={favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
