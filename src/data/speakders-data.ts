import speaker1Avatar from "assets/images/speakers/speaker-1.jpg";
import speaker2Avatar from "assets/images/speakers/speaker-2.jpg";
import speaker3Avatar from "assets/images/speakers/speaker-3.jpg";
import speaker4Avatar from "assets/images/speakers/speaker-4.jpg";
import speaker5Avatar from "assets/images/speakers/speaker-5.jpg";

export const speakersList: speaker[] = [
  {
    name: "رونیکا مشهدی",
    position: "توسعه دهنده وب",
    company: "اسنپ فود",
    photo: speaker1Avatar,
    brandClass: "text-[#f700a2]",
  },
  {
    name: "شمیم رضوانی",
    position: "توسعه دهنده بک‌اند",
    company: "دیجیکالا",
    photo: speaker2Avatar,
    brandClass: "text-[#e94257]",
  },
  {
    name: "کوروش بینوا",
    position: "توسعه دهنده فرانت‌اند",
    company: "شیپور",
    photo: speaker3Avatar,
    brandClass: "text-[#0265e5]",
  },
  {
    name: "رعنا خوشه",
    position: "مدیر فنی",
    company: "لیارا",
    photo: speaker4Avatar,
    brandClass: "",
  },
  {
    name: "جواد جوادی",
    position: "مدیر تیم پشتیبانی",
    company: "جابینجا",
    photo: speaker5Avatar,
    brandClass: "from-[#02abdf] to-[#01bd9c] bg-gradient-to-r bg-clip-text text-transparent",
  },
];

export interface speaker {
  name: string;
  position: string;
  company: string;
  brandClass?: string;
  photo: StaticImageData;
}
