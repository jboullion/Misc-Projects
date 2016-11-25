import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  //const video = props.video // = {video} param
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} title={video.snippet.title} />
        </div>

        <div className="media-body">
          <div className="media-heading" >{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
