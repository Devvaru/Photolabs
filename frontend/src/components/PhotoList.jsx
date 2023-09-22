import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const { favouritePhotoIds, updateFavouritePhotoIds, photoData, setPhotoData, PhotoDetailsModal, displayModal, photos } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          
          isFavorited={favouritePhotoIds.includes(photo.id)}
          updateFavouritePhotoIds={updateFavouritePhotoIds}

          PhotoDetailsModal={PhotoDetailsModal}
          displayModal={displayModal}

          photoData={photoData}
          setPhotoData={setPhotoData}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
