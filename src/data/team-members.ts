import { socialMediaLinks } from "types";

import aida from "assets/images/team/aida-kamranfar.jpg";
import ali from "assets/images/team/ali-golkar.jpg";
import amir from "assets/images/team/amirhossein-karimi.jpg";
import hesam from "assets/images/team/hesam-mousavi.jpg";
import mehdi from "assets/images/team/mehdi-mahmoudi.jpg";
import sadegh from "assets/images/team/sadegh-alavani.jpg";
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
    name: "محمد صادق علوانی",
    role: "هماهنگی و تدارکات",
    photo: sadegh,
    links: {
      instagram: "https://www.instagram.com/sadeegh.pv/",
    },
  },
  {
    name: "محمدمهدی محمودی",
    role: "هماهنگی و تدارکات",
    photo: mehdi,
    links: {
      linkedin: "https://www.linkedin.com/in/mehdi-mahmoudi95/",
      instagram: "https://www.instagram.com/mehdimh95/",
    },
  },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: StaticImageData;
  links: socialMediaLinks;
}
