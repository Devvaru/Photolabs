import React, { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',

  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL',

  SET_PHOTO_DATA: 'SET_PHOTO_DATA',

  SET_TOPIC_DATA: 'SET_TOPIC_DATA',

  DISPLAY_MODAL_DETAILS: 'DISPLAY_MODAL_DETAILS'
}
const initialState = {
  favouritePhotoIds: [],
  displayModal: false,
  displayModalDetails: {}, // original mock data for modal
  photoData: [], // general photos
  topicData: []
};

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

      case ACTIONS.DISPLAY_MODAL_DETAILS:
        const { data, isOpen } = action.payload;
        return { ...state, displayModalDetails: { ...data }, displayModal: isOpen };

      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };

      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };

      case ACTIONS.CLOSE_PHOTO_MODAL:
        return { ...state, displayModal: false };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // get request for photos, runs once
  useEffect(() => {
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  // get request for topics, runs once
  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .then(data => {
        console.log("topics data:", data);
        return dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      })
  }, []);

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

  // sets photo data for modal and sets displayModal boolean
  const displayModalPhotoDetails = (data, isOpen = false) => {
    dispatch({ type: ACTIONS.DISPLAY_MODAL_DETAILS, payload: { data, isOpen } });
  };

  // closes modal
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL })
  };

  return { state, updateFavouritePhotoIds, displayModalPhotoDetails, onClosePhotoDetailsModal };
}

export default useApplicationData;