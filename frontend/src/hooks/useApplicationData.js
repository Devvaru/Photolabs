import { useReducer, useEffect } from 'react';
import axios from 'axios';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  DISPLAY_MODAL_DETAILS: 'DISPLAY_MODAL_DETAILS'
};

const initialState = {
  favouritePhotoIds: [],
  displayModal: false,
  displayModalDetails: {},
  photoData: [],
  topicData: []
};

const useApplicationData = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FAV_PHOTO_ADDED:
        return {
          ...state,
          favouritePhotoIds: [...state.favouritePhotoIds, action.payload],
        };

      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state,
          favouritePhotoIds: state.favouritePhotoIds.filter(
            (favPhotoID) => favPhotoID !== action.payload
          ),
        };

      case ACTIONS.DISPLAY_MODAL_DETAILS:
        const { data, isOpen } = action.payload;
        return { ...state, displayModalDetails: { ...data }, displayModal: isOpen };

      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };

      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };

      case ACTIONS.GET_PHOTOS_BY_TOPIC:
        return { ...state, photoData: action.payload };

      case ACTIONS.CLOSE_PHOTO_MODAL:
        return { ...state, displayModal: false };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // get request for photos, runs once
  useEffect(() => {
    const fetchArray = [axios.get('/api/photos'), axios.get('/api/topics')];
    Promise.all(fetchArray)
      .then((all) => {
        const [photos, topics] = all;
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photos.data })
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topics.data })
      })
      .catch((error) => {
        console.error("Error fetching photos and topics: ", error);
      });
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

  // display photos based on topic
  const onTopicSelect = (id) => {
    axios.get(`/api/topics/photos/${id}`)
      .then(response => response.data)
      .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data }))
      .catch((error) => {
        console.error("Error fetching photos by topic: ", error);
      });
  };

  return { state, updateFavouritePhotoIds, displayModalPhotoDetails, onClosePhotoDetailsModal, onTopicSelect };
}

export default useApplicationData;