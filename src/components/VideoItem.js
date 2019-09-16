import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnail.medium.url} alt={video.snippet.title} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;
