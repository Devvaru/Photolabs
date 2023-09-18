import React, { useCallback, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [displayModal, setDisplayModal] = useState(false);

  const openModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="App">
      <HomeRoute
        displayModal={displayModal}
        openModal={openModal}
        closeModal={closeModal} />
    </div>
  );
};

export default App;
