import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const { topicData, onTopicSelect } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          // setTopicId={setTopicId}
          onTopicSelect={onTopicSelect}
        />
      ))}
    </div>
  );
};

export default TopicList;
