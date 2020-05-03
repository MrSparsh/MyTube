import React, { Component } from "react";

export default class VideoDetail extends Component {
  render() {
 
    let { video } = this.props;
    if (!video) {
      return <div className="ui segment">Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title={video.snippet.title} src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
