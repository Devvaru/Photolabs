import React, { useEffect, useState } from 'react';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const { favouritedPhotoID } = props;
  const [displayAlert, setDisplayAlert] = useState(favouritedPhotoID.length > 0);
  useEffect(() => {
    // Update displayAlert when favouritedPhotoID length changes
    setDisplayAlert(favouritedPhotoID.length > 0);
  }, [favouritedPhotoID]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge displayAlert={displayAlert} />
    </div>
  )
}

export default TopNavigation;