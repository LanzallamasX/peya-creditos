// tracking.js



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