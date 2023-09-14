import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const { id, location, imageSource, username, profile } = props;

  return (
    <div className="photo-list__item">
      <div >
        <img className="photo-list__image" src={imageSource} />
      </div>

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div>
          <div className="photo-list__user-info">{username}</div>
          <div className="photo-list__user-info photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

    </div>
  )
};

export default PhotoListItem;
