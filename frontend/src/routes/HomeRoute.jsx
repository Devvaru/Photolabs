import React from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { displayModalDetails, displayModalPhotoDetails, photoData, topicData, displayModal, favouritePhotoIds, updateFavouritePhotoIds, onClosePhotoDetailsModal, openFavouritesModal, onTopicSelect } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        favouritePhotoIds={favouritePhotoIds}
        topicData={topicData}
        onTopicSelect={onTopicSelect}
        openFavouritesModal={openFavouritesModal}
      />
      <PhotoList
        favouritePhotoIds={favouritePhotoIds}
        updateFavouritePhotoIds={updateFavouritePhotoIds}
        photoData={photoData}
        displayModalDetails={displayModalDetails}
        displayModalPhotoDetails={displayModalPhotoDetails}
        displayModal={displayModal}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
      />
    </div>
  );
};

export default HomeRoute;
