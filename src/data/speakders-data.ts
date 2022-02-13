import balehLogo from "assets/images/companies/baleh.png";
import liaraLogo from "assets/images/companies/liara.png";
import snappLogo from "assets/images/companies/snapp.png";
import snappMarketLogo from "assets/images/companies/snapp-market.png";

// import miladMoafiAvatar from "assets/images/speakers/milad-moafi.png";
import sobhanAvatar from "assets/images/speakers/sobhan.jpg";
import miladAzamiAvatar from "assets/images/speakers/milad-azami.png";
import amirAliGholiAvatar from "assets/images/speakers/amirali-gholi.png";
import mrAlaAvatar from "assets/images/speakers/mohammadreza-ala.jpg";
import mohammadMahmoodiAvatar from "assets/images/speakers/mohammad-mahmoodi.png";

export const speakersList: speaker[] = [
  {
    photo: amirAliGholiAvatar,
    name: "امیرعلی قلی",
    position: "توسعه دهنده‌ی جاوااسکریپت",
    companyName: "لیارا",
    companyLogo: liaraLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/gholi-dev",
      github: "https://github.com/gholi-dev",
    },
  },
  {
    photo: sobhanAvatar,
    name: "سبحان امین‌نژاد",
    position: "توسعه‌دهنده‌ی ارشد فرانت‌اند",
    companyName: "اسنپ مارکت",
    companyLogo: snappMarketLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/sobhan-aminnejad/",
    },
  },
  {
    name: "میلاد اعظمی",
    position: "اینفولوئنسر فرانت‌اند",
    companyName: "فریلنسر",
    photo: miladAzamiAvatar,
    brandClass: "from-[#02abdf] to-[#01bd9c] bg-gradient-to-r bg-clip-text text-transparent",
    hideCompanyPrefix: true,
    links: {
      linkedin: "https://www.linkedin.com/in/milad-azami-b226631b5/",
      instagram: "https://www.instagram.com/javascript.front/",
    },
  },
  {
    name: "محمدرضا اعلا",
    position: "مهندس فرانت‌اند",
    companyName: "اسنپ",
    photo: mrAlaAvatar,
    companyLogo: snappLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/mohammadrezala/",
    },
  },
  {
    name: "محمد محمودی",
    position: "راهبر تیم فنی",
    companyName: "پیام‌رسان بانکی بله",
    photo: mohammadMahmoodiAvatar,
    companyLogo: balehLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/mohammad-mahmoudi-a7280376/",
    },
  },
];

export interface speaker {
  photo: StaticImageData;
  name: string;
  position: string;
  companyName?: string;
  brandClass?: string;
  companyLogo?: StaticImageData;
  hideCompanyPrefix?: boolean;
  links?: links;
}

export type links = {
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
};
