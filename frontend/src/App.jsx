import React, { useCallback, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(false);
  const [photoData, setPhotoData] = useState({});

  const closeModal = () => {
    setDisplayModal(false);
  };

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
    <div className="App">
      <HomeRoute
        displayModal={displayModal}
        closeModal={closeModal}
        photoData={photoData}
        setPhotoData={setPhotoData}
        setDisplayModal={setDisplayModal}
        favouritedPhotoID={favouritedPhotoID}
        changeFavourite={changeFavourite}
      />
      {displayModal && <PhotoDetailsModal
        closeModal={closeModal}
        photoData={photoData}
        favouritedPhotoID={favouritedPhotoID}
        changeFavourite={changeFavourite} />}
    </div>
  );
};

export default App;
