import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {id, location, imageSource, username, profile} = props;

  return (
    <div>
      <img src={imageSource} />
      <img src={profile} />
      <div>
        <h2>{username}</h2>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
      
    </div>
  )
};

export default PhotoListItem;
