// import miladMoafiAvatar from "assets/images/speakers/milad-moafi.png";
import balehLogo from "assets/images/companies/baleh.png";
import liaraLogo from "assets/images/companies/liara.png";
import snappLogo from "assets/images/companies/snapp.png";
import snappMarketLogo from "assets/images/companies/snapp-market.png";
import sobhanAvatar from "assets/images/speakers/sobhan.jpg";
import miladAzamiAvatar from "assets/images/speakers/milad-azami.png";
import amirAliGholiAvatar from "assets/images/speakers/amirali-gholi.png";
import mrAlaAvatar from "assets/images/speakers/mohammadreza_ala.jpg";
import mohammadMahmoodiAvatar from "assets/images/speakers/mohammad_mahmoodi.jpg";

export const speakersList: speaker[] = [
  {
    photo: amirAliGholiAvatar,
    name: "امیرعلی قلی",
    position: "توسعه دهنده‌ی جاوااسکریپت",
    companyName: "لیارا",
    companyLogo: liaraLogo,
  },
  {
    photo: sobhanAvatar,
    name: "سبحان امین‌نژاد",
    position: "توسعه‌دهنده‌ی ارشد فرانت‌اند",
    companyName: "اسنپ مارکت",
    companyLogo: snappMarketLogo,
  },
  {
    name: "میلاد اعظمی",
    position: "اینفولوئنسر فرانت‌اند",
    companyName: "فریلنسر",
    photo: miladAzamiAvatar,
    brandClass: "from-[#02abdf] to-[#01bd9c] bg-gradient-to-r bg-clip-text text-transparent",
    hideCompanyPrefix: true,
  },
  {
    name: "محمدرضا اعلا",
    position: "مهندس فرانت‌اند",
    companyName: "اسنپ",
    photo: mrAlaAvatar,
    companyLogo: snappLogo,
  },
  {
    name: "محمود محمودی",
    position: "راهبر تیم فنی",
    companyName: "پیام‌رسان بانکی بله",
    photo: mohammadMahmoodiAvatar,
    companyLogo: balehLogo,
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
}
