import React from 'react';

const FeaturedVideo = () => {
  const currentVideoIndex =Math.floor(Math.random() * 24)

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
    <div className="overflow-hidden">
            <video
              autoPlay
              muted
              loop
            >
              <source src="/video/Bg5.m4v"/>
            </video>
    </div>
  );
};

export default FeaturedVideo;