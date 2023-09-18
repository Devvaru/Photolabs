import React, { useCallback, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(false);
  const [photoData, setPhotoData] = useState();

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <HomeRoute
        displayModal={displayModal}
        closeModal={closeModal}
        photoData={photoData}
        setPhotoData={setPhotoData}
        setDisplayModal={setDisplayModal}
      />
      {displayModal && <PhotoDetailsModal closeModal={closeModal} photoData={photoData} />}
    </div>
  );
};

export default App;
