import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {

  const { closeModal, photoData, favouritedPhotoID, changeFavourite } = props;
  console.log(photoData);

  const similarPhotos = Object.values(photoData.similar_photos);
  console.log(similarPhotos)

  return (
    <div className="photo-details-modal">

      <button onClick={closeModal} className="photo-details-modal__close-button">
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
          favouritedPhotoID={favouritedPhotoID}
          changeFavourite={changeFavourite}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
