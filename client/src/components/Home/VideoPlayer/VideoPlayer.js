import ReactPlayer from 'react-player';
import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';

const VIDEO_PATH = 'https://youtu.be/wLi5Of3fB-w';

function VideoPlayer() {
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current?.getInternalPlayer()?.play();
  }, [playerRef]);

  return (
    <div className='video1'>
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        playing={true}
        muted={true}
        width="50%"
        height="100%"
      />
    </div>
    </div>
  );
};

export default VideoPlayer;

