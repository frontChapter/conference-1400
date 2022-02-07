export const socialMedia: SocialMedia[] = [
  {
    name: "telegram",
    url: "https://t.me/FrontChapter",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/frontChapter/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/FrontChapter_ir/",
  },
  {
    name: "github",
    url: "https://github.com/frontChapter/",
  },
];

interface SocialMedia {
  name: keyof typeof socialMediaIcons;
  url: string;
}

export const socialMediaIcons = {
  github: "ri-github-fill",
  twitter: "ri-twitter-fill",
  linkedin: "ri-linkedin-fill",
  instagram: "ri-instagram-fill",
  telegram: "ri-telegram-fill",
};
