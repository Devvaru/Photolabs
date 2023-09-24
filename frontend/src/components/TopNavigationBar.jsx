import React, { useEffect, useState } from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const { favouritePhotoIds, topicData, onTopicSelect } = props;

  // Update displayAlert when favouritePhotoIds length changes
  const [displayAlert, setDisplayAlert] = useState(favouritePhotoIds.length > 0);

  useEffect(() => {
    setDisplayAlert(favouritePhotoIds.length > 0);
  }, [favouritePhotoIds]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topicData={topicData}
        onTopicSelect={onTopicSelect} />
      <FavBadge displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;