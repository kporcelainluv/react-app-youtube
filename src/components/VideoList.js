import React from "react";
import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(v => {
    return (
      <VideoItem video={v} onVideoSelect={onVideoSelect} key={v.id.videoId} />
    );
  });
  return <div className={"ui relaxed divided list"}>{renderedList}</div>;
};
