// import miladMoafiAvatar from "assets/images/speakers/milad-moafi.png";
import sobhanAvatar from "assets/images/speakers/sobhan.jpg";
import miladAzamiAvatar from "assets/images/speakers/milad-azami.png";
import amirAliGholiAvatar from "assets/images/speakers/amirali-gholi.png";
import mrAlaAvatar from "assets/images/speakers/mohammadreza_ala.jpg";
import mohammadMahmoodiAvatar from "assets/images/speakers/mohammad_mahmoodi.jpg";

export const speakersList: speaker[] = [
  {
    name: "امیرعلی قلی",
    position: "توسعه دهنده‌ی جاوااسکریپت",
    company: "لیارا",
    photo: amirAliGholiAvatar,
    brandClass: "text-[#303030]",
  },
  {
    name: "سبحان امین‌نژاد",
    position: "توسعه‌دهنده‌ی ارشد فرانت‌اند",
    company: "اسنپ مارکت",
    photo: sobhanAvatar,
    brandClass: "text-[#3a52ff]",
  },
  {
    name: "میلاد اعظمی",
    position: "اینفولوئنسر فرانت‌اند",
    company: "فریلنسر",
    photo: miladAzamiAvatar,
    brandClass: "from-[#02abdf] to-[#01bd9c] bg-gradient-to-r bg-clip-text text-transparent",
  },
  {
    name: "محمدرضا اعلا",
    position: "مهندس فرانت‌اند",
    company: "اسنپ",
    photo: mrAlaAvatar,
    brandClass: "text-[#00d170]",
  },
  {
    name: "محمود محمودی",
    position: "راهبر تیم فنی",
    company: "پیام‌رسان بانکی بله",
    photo: mohammadMahmoodiAvatar,
    brandClass: "from-[#335280] to-[#4cebb4] bg-gradient-to-r bg-clip-text text-transparent",
  },
];

export interface speaker {
  name: string;
  position: string;
  company: string;
  brandClass?: string;
  photo: StaticImageData;
}
