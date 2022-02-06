import speaker1Avatar from "assets/images/speakers/speaker-1.jpg";
import speaker2Avatar from "assets/images/speakers/speaker-2.jpg";
import speaker3Avatar from "assets/images/speakers/speaker-3.jpg";
import speaker4Avatar from "assets/images/speakers/speaker-4.jpg";
import speaker5Avatar from "assets/images/speakers/speaker-5.jpg";

export const speakersList: speaker[] = [
  {
    name: "رنیکا مشهدی",
    title: "توسعه‌دهنده‌ی فرانت‌اند در تربچه",
    photo: speaker1Avatar,
  },
  {
    name: "ام‌کلثوم زینت پرست",
    title: "توسعه‌دهنده‌ی فرانت‌اند در kolsom soft",
    photo: speaker2Avatar,
  },
  {
    name: "کوروش بینوا",
    title: "UI-Developer در مایکروهارد",
    photo: speaker3Avatar,
  },
  {
    name: "رعنا خوشه",
    title: "Co-Founder در زی‌زی سافت",
    photo: speaker4Avatar,
  },
  {
    name: "جواد جوادی",
    title: "توسعه‌دهنده‌ی فرانت‌اند در نوین توسعه گران آوار",
    photo: speaker5Avatar,
  },
];

export interface speaker {
  photo: StaticImageData;
  name: string;
  title: string;
}
