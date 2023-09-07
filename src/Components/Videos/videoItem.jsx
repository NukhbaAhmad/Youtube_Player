import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="VideoItem p-3"
      onClick={() => {
        onVideoSelect(video);
      }}>
      <img src={video.snippet.thumbnails.medium.url} className="img-fluid" alt={video.snippet.title} />

      <div className="Content w-50">
        <div className="VideoHeader w-100 ps-2">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
