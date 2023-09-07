import React from "react";
import VideoItem from "./videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}></VideoItem>;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
