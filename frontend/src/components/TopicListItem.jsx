import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { id, slug, title, setTopicId } = props;

  const handleTopicClick = () => {
    setTopicId(id)
  }

  return (
    <div className="top-nav-bar__topic-list">
      <div className="topic-list__item">
        <span onClick={handleTopicClick}>
          {title}
        </span>
      </div>
    </div>
  );
};

export default TopicListItem;
