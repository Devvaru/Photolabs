import React, { useState } from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import photos from '../mocks/photos';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { setPhotoData, setDisplayModal, favouritedPhotoID, changeFavourite } = props;
  
  return (
    <div className="home-route">
      <TopNavigationBar favouritedPhotoID={favouritedPhotoID} />
      <PhotoList
        favouritedPhotoID={favouritedPhotoID}
        changeFavourite={changeFavourite}
        setPhotoData={setPhotoData}
        setDisplayModal={setDisplayModal}
        photos={photos}
      />

    </div>
  );
};

export default HomeRoute;
