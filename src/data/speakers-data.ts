import { socialMediaLinks } from "types";

export const speakersList: speaker[] = [
  {
    photo: "/images/speakers/amirali-gholi.png",
    name: "امیرعلی قلی",
    position: "توسعه‌دهنده‌ جاوا اسکریپت",
    companyName: "لیارا",
    companyLogo: "/images/companies/liara.png",
    links: {
      linkedin: "https://www.linkedin.com/in/gholi-dev",
      github: "https://github.com/gholi-dev",
      instagram: "https://www.instagram.com/gholi_dev",
    },
  },
  {
    photo: "/images/speakers/sobhan-amin-nejad.png",
    name: "سبحان امین‌نژاد",
    position: "توسعه‌دهنده‌ ارشد فرانت‌اند",
    companyName: "اسنپ مارکت",
    companyLogo: "/images/companies/snapp-market.png",
    links: {
      linkedin: "https://www.linkedin.com/in/sobhan-aminnejad/",
      instagram: "https://www.instagram.com/aminnejads/",
    },
  },
  {
    name: "میلاد عظمی",
    position: "اینفولوئنسر فرانت‌اند",
    companyName: "فریلنسر",
    photo: "/images/speakers/milad-azami.png",
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
    photo: "/images/speakers/mohammadreza-ala.png",
    companyLogo: "/images/companies/snapp.png",
    links: {
      linkedin: "https://www.linkedin.com/in/mohammadrezala/",
      instagram: "https://www.instagram.com/mhmdrz_a/",
    },
  },
  {
    name: "محمد محمودی",
    position: "راهبر تیم فنی",
    companyName: "پیام‌رسان بانکی بله",
    photo: "/images/speakers/mohammad-mahmoodi.png",
    companyLogo: "/images/companies/baleh.png",
    links: {
      linkedin: "https://www.linkedin.com/in/mohammad-mahmoudi-a7280376/",
    },
  },
  {
    name: "سید رضا موسوی",
    position: "چپتر لید فرانت‌اند",
    companyName: "باسلام",
    photo: "/images/speakers/reza-mosavi.png",
    companyLogo: "/images/companies/basalam.png",
    talk: true,
    links: {
      linkedin: "https://www.linkedin.com/in/rmoosavi/",
    },
  },
  {
    name: "محمدرضا ایرانمنش",
    position: "توسعه‌دهنده‌ ارشد فرانت‌اند",
    companyName: "دیوار",
    photo: "/images/speakers/mohammadreza-iranmanesh.png",
    companyLogo: "/images/companies/divar.png",
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
    photo: "/images/speakers/mohammad-jafari.png",
    companyLogo: "/images/companies/quera.png",
    talk: true,
    links: {
      linkedin: "https://www.linkedin.com/in/mjafari98/",
      twitter: "https://twitter.com/soften98/",
    },
  },
];

export interface speaker {
  photo: string;
  name: string;
  position: string;
  companyName?: string;
  brandClass?: string;
  companyLogo?: string;
  hideCompanyPrefix?: boolean;
  talk?: boolean;
  links?: socialMediaLinks;
}
