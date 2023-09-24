import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { id, slug, title, onTopicSelect } = props;

  return (
    <div className="top-nav-bar__topic-list">
      <div className="topic-list__item">
        <span onClick={() => onTopicSelect(id)}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default TopicListItem;
