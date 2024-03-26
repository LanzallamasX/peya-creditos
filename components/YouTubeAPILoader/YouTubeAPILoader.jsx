import React, { useEffect, useRef } from 'react';

const YouTubeAPILoader = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    let script;
    if (typeof window !== 'undefined' && !window.YT) {
      script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }

    const initializePlayer = () => {
      if (window.YT && window.YT.Player) {
        new window.YT.Player(playerRef.current, {

          videoId: videoId,
          
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerClick
          }
          
        });
      } else {
        setTimeout(initializePlayer, 100);
      }
    };

    if (window.YT) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
  };

  const onPlayerClick = (event) => {
    const state = event.data;
    if (state === window.YT.PlayerState.PLAYING) {
      window.dataLayer.push({'event': 'video.play', 'videoName': 'developmentStories'});
    } else if (state === window.YT.PlayerState.PAUSED) {
      window.dataLayer.push({'event': 'video.pause', 'videoName': 'developmentStories'});
    }
      };



  return <div ref={playerRef}></div>;
};

export default YouTubeAPILoader;