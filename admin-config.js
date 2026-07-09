// myplanningportal staff admin -- shared config for all admin pages.
// Same backend Worker as the customer portal -- just different, staff-only
// routes. Use the same value you put in portal-config.js.
const API_BASE_URL = "https://myplanningportal-api.ryan-95c.workers.dev";

// The customer-facing portal's own URL (the myplanningportal-portal Worker,
// not this admin site). Used only to build the full copy-paste link for
// "Generate login link" on the booking detail page -- the admin site and
// the portal are separate deployments, so it can't just read
// window.location.origin the way login.html/signup.html do on the portal
// itself. Swap this to your custom portal domain later if you set one up.
const PORTAL_BASE_URL = "https://myplanningportal-portal.ryan-95c.workers.dev";
