import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {id, location, imageSource, username, profile} = props;

  return (
    <div>
      <img src={imageSource} alt={username} />
      <div>
        <h2>{username}</h2>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
      <img src={profile} />
    </div>
  )
};

export default PhotoListItem;
