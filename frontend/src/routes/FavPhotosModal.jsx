import React from 'react';

import '../styles/FavPhotosModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const FavPhotosModal = (props) => {

  const { photoData, favouritePhotoIds, updateFavouritePhotoIds, displayModalFavourites, 
  displayFavouritesModalDetails, closeFavouritesModal } = props;

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={closeFavouritesModal} alt="close symbol" />
      </button>
      <div>hello world</div>
      {/* <div className="photo-details-modal__images">
        <div>
          <div className="photo-details-modal__header">Favourites</div>
          <PhotoList
            favouritePhotoIds={favouritePhotoIds}
            updateFavouritePhotoIds={updateFavouritePhotoIds}
            photoData={similarPhotos}
            displayFavouritesModalDetails={displayFavouritesModalDetails}
            displayModal={displayModal}
            onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          />
        </div>
      </div> */}
    </div>
  )
};

export default FavPhotosModal;
