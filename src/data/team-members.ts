import { socialMediaLinks } from "types";

import aida from "assets/images/team/aida-kamranfar.jpg";
import ali from "assets/images/team/ali-golkar.jpg";
import amir from "assets/images/team/amirhossein-karimi.jpg";
import hamzeh from "assets/images/team/hamzeh-ghoreyshi.jpg";
import hesam from "assets/images/team/hesam-mousavi.jpg";
import hirad from "assets/images/team/hirad-sajdeh.jpg";
import saleh from "assets/images/team/saleh-shojaei.jpg";
import tahmineh from "assets/images/team/tahmineh-reyvandi.jpg";

export const teamMembers: TeamMember[] = [
  {
    name: "سید صالح شجاعی",
    role: "مدیر اجرایی",
    photo: saleh,
    links: {
      linkedin: "https://www.linkedin.com/in/ordinarysaleh/",
      website: "https://roxaleh.ir/",
      telegram: "https://t.me/ordinarySaleh",
    },
  },
  {
    name: "امیرحسین کریمی",
    role: "مدیر فنی",
    photo: amir,
    links: {
      linkedin: "https://www.linkedin.com/in/amirhosseinkarimi/",
      github: "https://github.com/AmirHosseinKarimi",
    },
  },
  {
    name: "حسام موسوی",
    role: "طراح رابط کاربری و گرافیک",
    photo: hesam,
    links: {
      instagram: "https://www.instagram.com/HesMousavi/",
      dribbble: "https://dribbble.com/HesMousavi",
    },
  },
  {
    name: "علی گلکار",
    role: "طراح رابط کاربری",
    photo: ali,
    links: {
      linkedin: "https://www.linkedin.com/in/aligolkarali",
      website: "https://aligolkar.ir/",
      instagram: "https://www.instagram.com/aligolkar.ir/",
    },
  },
  {
    name: "تهمینه ریوندی",
    role: "تیم محتوا",
    photo: tahmineh,
    links: {
      linkedin: "https://www.linkedin.com/in/tahmineh-reyvandi/",
    },
  },
  {
    name: "آیدا کامران فر",
    role: "تیم محتوا",
    photo: aida,
    links: {
      instagram: "https://www.instagram.com/aida__kamranfar/",
    },
  },
  {
    name: "هیراد سجده",
    role: "تبلیغات و بازاریابی",
    photo: hirad,
    links: {
      telegram: "https://t.me/hiradsajde",
      instagram: "https://www.instagram.com/hirad.rs/",
      github: "https://github.com/hiradsajde",
    },
  },
  {
    name: "حمزه قریشی",
    role: "مشاور طراحی تجربه کاربری",
    photo: hamzeh,
    links: {
      linkedin: "https://www.linkedin.com/in/hamzeh-ux",
      instagram: "https://www.instagram.com/hamzeh.ux/",
      dribbble: "https://dribbble.com/Hamzeh_ux",
    },
  },
  // {
  //   name: "صادق",
  //   role: "تیم اجرایی",
  //   photo: placeholder,
  //   links: {},
  // },
  // {
  //   name: "مهدی",
  //   role: "تیم اجرایی",
  //   photo: placeholder,
  //   links: {},
  // },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: StaticImageData;
  links: socialMediaLinks;
}
