import React from "react";
import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos }) => {
  const renderedList = videos.map(v => {
    return <VideoItem video={v} />;
  });
  return <div className={"ui relaxed divided list"}>{renderedList}</div>;
};
