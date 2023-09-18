import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = (props) => {

  const { favouritedPhotoID, changeFavourite } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavorited={favouritedPhotoID.includes(photo.id)}
          changeFavourite={changeFavourite}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
