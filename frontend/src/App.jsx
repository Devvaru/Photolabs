import React, { useCallback, useState } from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photos = new Array(3).fill(null);

  return (
    <div className="App">

      {/* {photos.map((_, index) => (
        <PhotoListItem
          key={index}
          id={sampleDataForPhotoListItem.id}
          location={sampleDataForPhotoListItem.location}
          imageSource={sampleDataForPhotoListItem.imageSource}
          username={sampleDataForPhotoListItem.username}
          profile={sampleDataForPhotoListItem.profile}
        />
      ))} */}
      <TopNavigationBar />
      <PhotoList />
    </div>
  );
};

export default App;
