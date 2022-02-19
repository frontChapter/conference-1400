import balehLogo from "assets/images/companies/baleh.png";
import basalamLogo from "assets/images/companies/basalam.png";
import divarLogo from "assets/images/companies/divar.png";
import liaraLogo from "assets/images/companies/liara.png";
import snappLogo from "assets/images/companies/snapp.png";
import snappMarketLogo from "assets/images/companies/snapp-market.png";

// import miladMoafiAvatar from "assets/images/speakers/milad-moafi.png";
import sobhanAvatar from "assets/images/speakers/sobhan.jpg";
import miladAzamiAvatar from "assets/images/speakers/milad-azami.png";
import amirAliGholiAvatar from "assets/images/speakers/amirali-gholi.png";
import mrAlaAvatar from "assets/images/speakers/mohammadreza-ala.png";
import mohammadMahmoodiAvatar from "assets/images/speakers/mohammad-mahmoodi.png";
import mrIranmaneshAvatar from "assets/images/speakers/mohammadreza-iranmanesh.jpg";
import rezaMosaviAvatar from "assets/images/speakers/reza-mosavi.jpg";
import aliSoltanipourAvatar from "assets/images/speakers/mohammad-ali-soltanipour.jpg";

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
      instagram: "https://www.instagram.com/gholi_dev",
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
      instagram: "https://www.instagram.com/aminnejads/",
    },
  },
  {
    name: "میلاد عظمی",
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
      instagram: "https://www.instagram.com/mhmdrz_a/",
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
  {
    name: "سید رضا موسوی",
    position: "چپترلید فرانت‌اند",
    companyName: "باسلام",
    photo: rezaMosaviAvatar,
    companyLogo: basalamLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/rmoosavi/",
    },
  },
  {
    name: "محمدرضا ایرانمنش",
    position: "توسعه‌دهنده‌ی ارشد فرانت‌اند",
    companyName: "دیوار",
    photo: mrIranmaneshAvatar,
    companyLogo: divarLogo,
    links: {
      twitter: "https://twitter.com/iMohammadReza_",
      instagram: "https://www.instagram.com/imohammadreza.ir/",
      github: "https://github.com/iMohammadReza",
      website: "https://imohammadreza.ir",
    },
  },
  {
    name: "محمدعلی سلطانی پور",
    position: "مدیر فنی",
    companyName: "باسلام",
    photo: aliSoltanipourAvatar,
    companyLogo: basalamLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/soltanipour/",
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
