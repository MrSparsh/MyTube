import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

const KEY = "AIzaSyATS0EKdfpktHFtMNqzjKctfpi_8ziml8I";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("learn react");
  }
  onSearchSubmit = async (searchText) => {
    if(searchText === "") return;
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: "15",
        q: searchText,
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    console.log(searchText);
  };

  onItemClick = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onItemClick={this.onItemClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
