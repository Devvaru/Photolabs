import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import FavPhotosModal from 'routes/FavPhotosModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateFavouritePhotoIds,
    displayModalPhotoDetails,
    onClosePhotoDetailsModal,
    openFavouritesModal,
    closeFavouritesModal,
    onTopicSelect,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favouritePhotoIds={state.favouritePhotoIds}
        updateFavouritePhotoIds={updateFavouritePhotoIds}
        photoData={state.photoData}
        topicData={state.topicData}
        onTopicSelect={onTopicSelect}
        displayModal={state.displayModal}
        displayModalPhotoDetails={displayModalPhotoDetails}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        openFavouritesModal={openFavouritesModal}
      />
      {state.displayModal &&
        <PhotoDetailsModal
          photoData={state.photoData}
          favouritePhotoIds={state.favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          displayModalDetails={state.displayModalDetails}
        />}
      {state.displayFavouritesModal &&
        <FavPhotosModal
          photoData={state.photoData}
          favouritePhotoIds={state.favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds}
          closeFavouritesModal={closeFavouritesModal}
        />}
    </div>
  );
};

export default App;
