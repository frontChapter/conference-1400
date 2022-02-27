export type socialMediaLinks = {
  [key in keyof typeof socialMediaIcons]?: string;
};

export const socialMediaIcons = {
  github: "ri-github-fill",
  twitter: "ri-twitter-fill",
  linkedin: "ri-linkedin-fill",
  instagram: "ri-instagram-fill",
  facebook: "ri-facebook-fill",
  website: "ri-earth-fill",
  mastodon: "ri-mastodon-fill",
  telegram: "ri-telegram-fill",
  dribbble: "ri-dribbble-fill",
  behance: "ri-behance-fill",
};

export const planIcons = {
  management: "ri-flag-fill",
  break: "ri-restaurant-2-fill",
  presentation: "ri-slideshow-2-fill",
  talk: "ri-mic-2-fill",
};
