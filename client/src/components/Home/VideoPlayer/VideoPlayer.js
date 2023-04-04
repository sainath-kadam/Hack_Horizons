// import React from "react";
// import { useState } from 'react';

// function VideoPlayer({ videoUrl }) {
//   const [isFullScreen, setIsFullScreen] = useState(false);

//   const handleVideoClick = () => {
//     setIsFullScreen(true);
//   };

//   const handleFullScreenChange = () => {
//     if (document.fullscreenElement) {
//       setIsFullScreen(true);
//     } else {
//       setIsFullScreen(false);
//     }
//   };

//   const handleExitFullScreen = () => {
//     document.exitFullscreen();
//   };

//   const videoRef = React.createRef();

//   if (isFullScreen) {
//     // enter full-screen mode when the button is clicked
//     videoRef.current.requestFullscreen();
//     // listen for full-screen changes
//     document.addEventListener('fullscreenchange', handleFullScreenChange);
//     // exit full-screen mode when the video is clicked
//     videoRef.current.addEventListener('click', handleExitFullScreen);
//   } else {
//     // remove the event listeners if full-screen mode is not active
//     document.removeEventListener('fullscreenchange', handleFullScreenChange);
//     videoRef.current.removeEventListener('click', handleExitFullScreen);
//   }

//   return (
//     <div className="video-player">
//       <video src={videoUrl} ref={videoRef} onClick={handleVideoClick} controls />
//     </div>
//   );
// }

// export default VideoPlayer;
// import React from 'react'

// function VideoPlayer() {
//   return (
//     <div>
//       hlo
//     </div>
//   )
// }

// export default VideoPlayer
// import React, { useState, useRef } from "react";
// import "./VideoPlayer.css";

// function VideoPlayer({ videoUrl }) {
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const videoRef = useRef(null);

//   const handleVideoClick = () => {
//     setIsFullScreen(true);
//   };

//   const handleFullScreenChange = () => {
//     if (document.fullscreenElement) {
//       setIsFullScreen(true);
//     } else {
//       setIsFullScreen(false);
//     }
//   };

//   const handleExitFullScreen = () => {
//     document.exitFullscreen();
//   };

//   if (isFullScreen) {
//     // enter full-screen mode when the button is clicked
//     videoRef.current.requestFullscreen();
//     // listen for full-screen changes
//     document.addEventListener('fullscreenchange', handleFullScreenChange);
//     // exit full-screen mode when the video is clicked
//     videoRef.current.addEventListener('click', handleExitFullScreen);
//   } else {
//     // remove the event listeners if full-screen mode is not active
//     document.removeEventListener('fullscreenchange', handleFullScreenChange);
//     videoRef.current.removeEventListener('click', handleExitFullScreen);
//   }

//   return (
//     <div className="video-player-container">
//       <video src={videoUrl} ref={videoRef} onClick={handleVideoClick} controls />
//     </div>
//   );
// }

// export default VideoPlayer;
// import ReactPlayer from 'react-player';
// import React, { useRef } from 'react';
// const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';
// function VideoPlayer() {
//    const playerRef = useRef(null);
//    return (
//       <div>
//          <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
//       </div>
//    )
// };
// export default VideoPlayer;

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
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url={VIDEO_PATH}
        controls={true}
        playing={true}
        muted={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;

