const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

const pageview = () => {
  window.fbq("track", "PageView");
};
