import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {

  const { id, slug, title } = props;

  return (
    <div className="top-nav-bar__topic-list">
      <div className="topic-list__item">
        <span>
          {title}
        </span>
      </div>
    </div>
  );
};

export default TopicListItem;
