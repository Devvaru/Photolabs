import React, { useState } from 'react';

const useApplicationData = () => {

  const [state, setState] = useState({
    favouritePhotoIds: [],
    displayModal: false,
    photoData: {},
  });

  // set favourite photos array
  const updateFavouritePhotoIds = (photoID) => {

    if (state.favouritePhotoIds.includes(photoID)) {

      // Remove photo ID if already in favourites
      const copyOfFavourites = state.favouritePhotoIds.filter((favPhotoID) => photoID !== favPhotoID)
      setState({...state, favouritePhotoIds: copyOfFavourites})

    } else {

      // Add photo ID if not in favourites
      const modifiedFavourites = [...state.favouritePhotoIds, photoID]
      setState({...state, favouritePhotoIds: modifiedFavourites})
    }
  };

  const setPhotoData = (data, isOpen = false) => {
    setState({ ...state, photoData: { ...data }, displayModal: isOpen })
  };

  const onClosePhotoDetailsModal = () => {
    setState({ ...state, displayModal: false })
  };

  // const onOpenPhotoDetailsModal = () => {
  //   setState({ ...state, displayModal: true });
  // };

  const onLoadTopic = () => {

  }

  return { state, updateFavouritePhotoIds, setPhotoData, onClosePhotoDetailsModal };
}

export default useApplicationData;