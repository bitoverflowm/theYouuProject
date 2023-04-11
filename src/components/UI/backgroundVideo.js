import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = ({setHeadingTextColor, isSmallScreen}) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(Math.floor(Math.random() * 24))

  const handleVideoEnded = () => {
    // Increment the current video index to rotate to the next video
    setCurrentVideoIndex(Math.floor(Math.random() * videos.length))
    setHeadingTextColor(videos[currentVideoIndex].textColor)
  };

  const videos = [
      {
        url: 'video/bg0.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg1.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg2.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg3.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg4.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg5.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg6.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg7.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg8.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg9.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg10.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg11.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg12.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg13.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg14.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg15.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg16.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg17.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg18.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg19.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg20.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg21.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg22.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg23.m4v',
        textColor: 'text-black'
      },
      {
        url: 'video/bg24.m4v',
        textColor: 'text-white'
      },
      {
        url: 'video/bg25.m4v',
        textColor: 'text-white'
      }
  ];

  return (
    <div className="relative z-0">
        {isSmallScreen ? 
            <ReactPlayer
            url={videos[currentVideoIndex].url}
            playing
            muted
            width="155vh"
            height="90vh"
            style={{position: "absolute", left: "-70vw"}}
            onEnded={handleVideoEnded}
            onError={(e) => {
              console.error("Video playback error:", e);
            }}
          />
          :
          <ReactPlayer
            url={videos[currentVideoIndex].url}
            playing
            muted
            width="100%"
            height="100vh"
            style={{position: "absolute", zIndex: "0"}}
            onEnded={handleVideoEnded}
            onError={(e) => {
              console.error("Video playback error:", e);
            }}
          />
        }
    </div>
  );
};

export default BackgroundVideo;