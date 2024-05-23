export const TRACKING_EVENTS = {
  CREDIT_MORE_INFO_CLICKED: 'credit_more_info.clicked',
  LANDING_OPTION_CLICKED: 'landing_option.clicked',
  VIDEO_PLAY: 'video.play',
  VIDEO_PAUSE: 'video.pause',
 // CAROUSEL_SWIPE: 'carousel.swipe',
};

export const pushTrackingEvent = (event, trackingData = {}) => {
  const isValidEvent = typeof event === 'string' && event.trim().length > 0;
  if (isValidEvent && window && window.dataLayer && window.dataLayer.push) {
    const eventData = {
      event,
      ...trackingData,
    };
    window.dataLayer.push(eventData);
    console.log(eventData);
  }
};

export default pushTrackingEvent;

