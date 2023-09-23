import React, { useCallback, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateFavouritePhotoIds,
    setPhotoData,
    // onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favouritePhotoIds={state.favouritePhotoIds}
        updateFavouritePhotoIds={updateFavouritePhotoIds}

        displayModal={state.displayModal}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}

        photos={state.photos}
        
        setPhotoData={setPhotoData}
      />
      {state.displayModal &&
        <PhotoDetailsModal
          favouritePhotoIds={state.favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds}

          onClosePhotoDetailsModal={onClosePhotoDetailsModal}

          photoData={state.photoData}
        />}
    </div>
  );
};

export default App;
