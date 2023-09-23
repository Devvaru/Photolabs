import React, { useEffect, useState } from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const { favouritePhotoIds, topicData } = props;
  const [displayAlert, setDisplayAlert] = useState(favouritePhotoIds.length > 0);
  useEffect(() => {
    // Update displayAlert when favouritePhotoIds length changes
    setDisplayAlert(favouritePhotoIds.length > 0);
  }, [favouritePhotoIds]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicData={topicData} />
      <FavBadge displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;