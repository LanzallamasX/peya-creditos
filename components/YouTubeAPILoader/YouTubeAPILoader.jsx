import React, { useEffect, useRef } from 'react';
import { pushTrackingEvent } from "../../utils/pushTrackingEvent";
import { TRACKING_EVENTS } from "../../utils/pushTrackingEvent";

const YouTubeAPILoader = ({ videoId, eventClick }) => {
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


      pushTrackingEvent(TRACKING_EVENTS.VIDEO_PLAY, {
        videoName: 'developmentStories'
      });


    } else if (state === window.YT.PlayerState.PAUSED) {

      pushTrackingEvent(TRACKING_EVENTS.VIDEO_PAUSE, {
        videoName: 'developmentStories'
      });

    }
      };



  return <div ref={playerRef}></div>;
};

export default YouTubeAPILoader;