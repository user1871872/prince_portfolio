/**
 * Add your social profile URLs here.
 * Set url to null or '' to hide that icon.
 */
export const socialLinks = [
  { id: 'facebook', name: 'Facebook', url: 'https://www.facebook.com/yourpage', ariaLabel: 'Facebook' },
  { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile', ariaLabel: 'LinkedIn' },
  { id: 'twitter', name: 'Twitter', url: 'https://twitter.com/yourhandle', ariaLabel: 'Twitter' },
  { id: 'instagram', name: 'Instagram', url: 'https://www.instagram.com/yourhandle', ariaLabel: 'Instagram' },
].filter((item) => item.url && item.url.trim());
