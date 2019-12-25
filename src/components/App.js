import React from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../APIs";
import { VideoList } from "./VideoList";

export class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async term => {
    const videos = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: videos.data.items });
  };
  render() {
    return (
      <div className={"ui container"}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        There are {this.state.videos.length} videos
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
