import React from 'react';

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const { favouritePhotoIds, updateFavouritePhotoIds, displayModalDetails, displayModalPhotoDetails, PhotoDetailsModal, displayModal, photoData } = props;

  return (
    <ul className="photo-list">
      {photoData.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          favouritePhotoIds={favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds}
          PhotoDetailsModal={PhotoDetailsModal}
          displayModal={displayModal}
          displayModalDetails={displayModalDetails}
          displayModalPhotoDetails={displayModalPhotoDetails && displayModalPhotoDetails}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
