import React, { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',

  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL',

  SET_PHOTO_DATA: 'SET_PHOTO_DATA',

  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',

  // SELECT_PHOTO: 'SELECT_PHOTO',

  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

const useApplicationData = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        const photoIdToAdd = action.payload;
        if (!state.favouritePhotoIds.includes(photoIdToAdd)) {
          const copyOfFavouritePhotoIds = [...state.favouritePhotoIds, photoIdToAdd];
          return { ...state, favouritePhotoIds: copyOfFavouritePhotoIds };
        }

      case ACTIONS.FAV_PHOTO_REMOVED:
        const photoIdToRemove = action.payload;
        if (state.favouritePhotoIds.includes(photoIdToRemove)) {
          const copyOfFavouritePhotoIds = state.favouritePhotoIds.filter(
            (favPhotoID) => favPhotoID !== photoIdToRemove
          );
          return { ...state, favouritePhotoIds: copyOfFavouritePhotoIds };
        }

      //   case ACTIONS.FAV_PHOTO_ADDED:
      //   return {
      //     ...state,
      //     favouritePhotoIds: [...state.favouritePhotoIds, action.payload],
      //   };

      // case ACTIONS.FAV_PHOTO_REMOVED:
      //   return {
      //     ...state,
      //     favouritePhotoIds: state.favouritePhotoIds.filter(
      //       (favPhotoID) => favPhotoID !== action.payload
      //     ),
      //   };

      case ACTIONS.SET_PHOTO_DATA:
        const { data, isOpen } = action.payload;
        return { ...state, photoData: { ...data }, displayModal: isOpen };

      case ACTIONS.CLOSE_PHOTO_MODAL:
        return { ...state, displayModal: false };

      default:
        return state;
    }
  }

  const initialState = {
    favouritePhotoIds: [],
    displayModal: false,
    // photoData: {}, // original mock data
    photoData: [],
    topicData: []
  };

  // get request for photos, runs once
  useEffect(() => {
    fetch('/api/photos')
      .then(res => console.log(res.json()))
      // .then(data => {
      //   setState([...data])
      // })
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  // set favourite photos array
  const updateFavouritePhotoIds = (photoID) => {
    if (state.favouritePhotoIds.includes(photoID)) {
      // ID exists, dispatch a removal action
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoID });
    } else {
      // ID doesn't exist, dispatch an addition action
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoID });
    }
  };

  console.log(state.favouritePhotoIds)

  // sets photo data for modal and sets displayModal boolean
  const setPhotoData = (data, isOpen = false) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data, isOpen } });
  };

  // closes modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL })
  };

  // const onOpenPhotoDetailsModal = () => {
  //   setState({ ...state, displayModal: true });
  // };

  // const onLoadTopic = () => {

  // }

  return { state, updateFavouritePhotoIds, setPhotoData, onClosePhotoDetailsModal };
}

export default useApplicationData;