import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateFavouritePhotoIds,
    displayModalPhotoDetails,
    onClosePhotoDetailsModal,
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
        onClosePhotoDetailsModal={onClosePhotoDetailsModal}
        displayModalPhotoDetails={displayModalPhotoDetails}
      />
      {state.displayModal &&
        <PhotoDetailsModal
          photoData={state.photoData}
          favouritePhotoIds={state.favouritePhotoIds}
          updateFavouritePhotoIds={updateFavouritePhotoIds}
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          displayModalDetails={state.displayModalDetails}
        />}
    </div>
  );
};

export default App;
