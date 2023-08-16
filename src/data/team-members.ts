import { socialMediaLinks } from "types";

export const teamMembers: TeamMember[] = [
  {
    name: "سید صالح شجاعی",
    role: "مدیر اجرایی",
    photo: "/images/team/saleh-shojaei.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/ordinarysaleh/",
      website: "https://roxaleh.ir/",
      telegram: "https://t.me/ordinarySaleh",
    },
  },
  {
    name: "امیرحسین کریمی",
    role: "مدیر فنی",
    photo: "/images/team/amirhossein-karimi.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/amirhosseinkarimi/",
      github: "https://github.com/AmirHosseinKarimi",
    },
  },
  {
    name: "حسام موسوی",
    role: "طراح رابط کاربری و گرافیک",
    photo: "/images/team/hesam-mousavi.jpg",
    links: {
      instagram: "https://www.instagram.com/HesMousavi/",
      dribbble: "https://dribbble.com/HesMousavi",
    },
  },
  {
    name: "علی گلکار",
    role: "طراح رابط کاربری",
    photo: "/images/team/ali-golkar.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/aligolkarali",
      website: "https://aligolkar.ir/",
      instagram: "https://www.instagram.com/aligolkar.ir/",
    },
  },
  {
    name: "تهمینه ریوندی",
    role: "تیم محتوا",
    photo: "/images/team/tahmineh-reyvandi.jpg",
    links: {
      linkedin: "https://www.linkedin.com/in/tahmineh-reyvandi/",
    },
  },
  {
    name: "آیدا کامران فر",
    role: "تیم محتوا",
    photo: "/images/team/aida-kamranfar.jpg",
    links: {
      instagram: "https://www.instagram.com/aida__kamranfar/",
    },
  },
  {
    name: "محمد صادق علوانی",
    role: "هماهنگی و تدارکات",
    photo: "/images/team/sadegh-alavani.jpg",
    links: {
      instagram: "https://www.instagram.com/sadeegh.pv/",
    },
  },
  {
    name: "محمدمهدی محمودی",
    role: "هماهنگی و تدارکات",
    photo: "/images/team/mehdi-mahmoudi.jpg",
    links: {
      instagram: "https://www.instagram.com/mehdimh95/",
    },
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  links: socialMediaLinks;
}
