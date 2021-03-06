import React from "react";
import "./videoItem.css";

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className={"video-item item"}
    >
      <img
        className={"ui image"}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className={"content"}>
        <div className={"header"}>
          <h3>{video.snippet.title}</h3>
        </div>
      </div>
    </div>
  );
};
