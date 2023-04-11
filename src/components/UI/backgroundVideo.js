import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const BackgroundVideo = ({setHeadingTextColor, isSmallScreen, isClient }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(Math.floor(Math.random() * 24))
  const [clientReady, setClientReady] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const handleVideoEnded = () => {
    // Increment the current video index to rotate to the next video
    setCurrentVideoIndex(Math.floor(Math.random() * (videos.length-1)))
    setHeadingTextColor(videos[currentVideoIndex].textColor)
    console.log('video index ', currentVideoIndex)
  }

  const handleVideoError = () => {
    if (retryCount < 3) {
      setTimeout(() => {
        setRetryCount(retryCount + 1);
        setCurrentVideoIndex(currentVideoIndex); // Force re-render
      }, 2000); // Retry after 2 seconds
    } else {
      console.error('Failed to load video after 3 retries');
    }
  }

  useEffect(() => {
    if (isClient) {
      setClientReady(true);
    }
  }, [isClient]);

  const videos = [
      {
        url: '/video/Bg0.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg1.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg2.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg3.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg4.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg5.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg6.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg7.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg8.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg9.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg10.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg11.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg12.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg13.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg14.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg15.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg16.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg17.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg18.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg19.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg20.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg21.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg22.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg23.m4v',
        textColor: 'text-black'
      },
      {
        url: '/video/Bg24.m4v',
        textColor: 'text-white'
      },
      {
        url: '/video/Bg25.m4v',
        textColor: 'text-white'
      }
  ];

  return (
    <div className="relative z-0">
        { clientReady && (
        isSmallScreen ? 
            <ReactPlayer
            url={videos[currentVideoIndex].url}
            playing
            muted
            width="155vh"
            height="90vh"
            style={{position: "absolute", left: "-70vw"}}
            onEnded={handleVideoEnded}
            onError={(e) => {
              console.error("Video playback error:", e)
              handleVideoError()
            }}
            onReady={() => {
              setRetryCount(0);
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
              console.error("Video playback error:", e)
              handleVideoError()
            }}
            onReady={() => {
              setRetryCount(0);
            }}
          />
        )}
    </div>
  );
};

export default BackgroundVideo;