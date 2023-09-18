import React, { useState } from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { displayModal, openModal, closeModal } = props;
  const [favouritedPhotoID, setFavouritedPhotoID] = useState([]);

  const changeFavourite = (photoID) => {
    if (favouritedPhotoID.includes(photoID)) {
      // Remove photo ID if already in favourites
      const copyOfFavourites = [...favouritedPhotoID].filter((favPhotoID) => photoID !== favPhotoID)
      setFavouritedPhotoID(copyOfFavourites);
    } else {
      // Add photo ID if not in favourites
      setFavouritedPhotoID(prev => [...prev, photoID]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favouritedPhotoID={favouritedPhotoID} />
      <PhotoList
        favouritedPhotoID={favouritedPhotoID}
        changeFavourite={changeFavourite}
        openModal={openModal}
      />
      {displayModal && <PhotoDetailsModal closeModal={closeModal} />}
    </div>
  );
};

export default HomeRoute;
