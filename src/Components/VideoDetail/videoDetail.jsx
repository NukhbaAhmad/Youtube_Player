import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="videoPlayerWrapper mt-2 p-2">
      {/* VideoPlayer */}
      <div className="embed-responsive videoPlayerContainer">
        <iframe
          className="embed-responsive-item"
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
      </div>

      {/* VideoContent */}
      <div className="p-2 videoDetailBorder mt-3">
        <h5>{video.snippet.title}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default VideoDetail;
