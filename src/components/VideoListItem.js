import React, { Component } from "react";
import "../styles/VideoListItem.css";

export default class VideoListItem extends Component {
  render() {
    let { video, onItemClick } = this.props;
    return (
      <div onClick={() => onItemClick(video)} className="item video-list-item">
        <img
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}
