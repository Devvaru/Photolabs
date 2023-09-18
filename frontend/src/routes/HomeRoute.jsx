import React, { useState } from 'react';

import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';


import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { setPhotoData, setDisplayModal } = props;
  
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
        setPhotoData={setPhotoData}
        setDisplayModal={setDisplayModal}
      />

    </div>
  );
};

export default HomeRoute;
