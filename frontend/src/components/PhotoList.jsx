import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((data) => (
        <PhotoListItem
          key={data.id}
          id={data.id}
          location={data.location}
          urls={data.urls}
          user={data.user}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
