import React from "react";
import VideoListItem from "./VideoListItem";

export default function VideoList({ videos, onItemClick }) {
  let showList = () => {
    let list = videos.map((video) => {
      return (
        <VideoListItem
          onItemClick={onItemClick}
          video={video}
          key={video.id.videoId}
        />
      );
    });
    return list;
  };
  return <div className="ui relaxed divided list">{showList()}</div>;
}
