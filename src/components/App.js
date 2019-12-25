import React from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../APIs";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

export class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async term => {
    const videos = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: videos.data.items,
      selectedVideo: videos.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("jordan peterson");
  }

  render() {
    return (
      <div className={"ui container"}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        There are {this.state.videos.length} videos
        <div className={"ui grid"}>
          <div className="ui row">
            <div className={"eleven wide column"}>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className={"five wide column"}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
