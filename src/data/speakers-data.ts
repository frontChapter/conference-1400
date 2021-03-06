import { socialMediaLinks } from "types";

import balehLogo from "assets/images/companies/baleh.png";
import basalamLogo from "assets/images/companies/basalam.png";
import divarLogo from "assets/images/companies/divar.png";
import liaraLogo from "assets/images/companies/liara.png";
import snappLogo from "assets/images/companies/snapp.png";
import snappMarketLogo from "assets/images/companies/snapp-market.png";
import queraLogo from "assets/images/companies/quera.png";

import sobhanAminNejadAvatar from "assets/images/speakers/sobhan-amin-nejad.png";
import miladAzamiAvatar from "assets/images/speakers/milad-azami.png";
import amirAliGholiAvatar from "assets/images/speakers/amirali-gholi.png";
import mrAlaAvatar from "assets/images/speakers/mohammadreza-ala.png";
import mohammadMahmoodiAvatar from "assets/images/speakers/mohammad-mahmoodi.png";
import mrIranmaneshAvatar from "assets/images/speakers/mohammadreza-iranmanesh.png";
import rezaMosaviAvatar from "assets/images/speakers/reza-mosavi.png";
import mohammadJafariAvatar from "assets/images/speakers/mohammad-jafari.png";

export const speakersList: speaker[] = [
  {
    photo: amirAliGholiAvatar,
    name: "امیرعلی قلی",
    position: "توسعه‌دهنده‌ جاوا اسکریپت",
    companyName: "لیارا",
    companyLogo: liaraLogo,
    links: {
      linkedin: "https://www.linkedin.com/in/gholi-dev",
      github: "https://github.com/gholi-dev",
      instagram: "https://www.instagram.com/gholi_dev",
    },
  },
  {
    photo: sobhanAminNejadAvatar,
    name: "سبحان امین‌نژاد",
    position: "توسعه‌دهنده‌ ارشد فرانت‌اند",
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
    position: "چپتر لید فرانت‌اند",
    companyName: "باسلام",
    photo: rezaMosaviAvatar,
    companyLogo: basalamLogo,
    talk: true,
    links: {
      linkedin: "https://www.linkedin.com/in/rmoosavi/",
    },
  },
  {
    name: "محمدرضا ایرانمنش",
    position: "توسعه‌دهنده‌ ارشد فرانت‌اند",
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
    name: "محمد جعفری",
    position: "توسعه‌دهنده‌ فول‌استک",
    companyName: "کوئرا",
    photo: mohammadJafariAvatar,
    companyLogo: queraLogo,
    talk: true,
    links: {
      linkedin: "https://www.linkedin.com/in/mjafari98/",
      twitter: "https://twitter.com/soften98/",
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
  talk?: boolean;
  links?: socialMediaLinks;
}
