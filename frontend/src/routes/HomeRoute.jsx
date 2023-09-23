import React from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photoData, setPhotoData, photos, displayModal, favouritePhotoIds, updateFavouritePhotoIds, onClosePhotoDetailsModal } = props;

  console.log(photos)

  return (
    <div className="home-route">
      <TopNavigationBar favouritePhotoIds={favouritePhotoIds} />
      <PhotoList
        favouritePhotoIds={favouritePhotoIds}
        updateFavouritePhotoIds={updateFavouritePhotoIds}

        photoData={photoData}
        setPhotoData={setPhotoData}
        photos={photos}

        displayModal={displayModal}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default HomeRoute;
