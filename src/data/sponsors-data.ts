import a4zi from "assets/images/sponsors/a4zi.png";
import liara from "assets/images/sponsors/liara.png";
import quera from "assets/images/sponsors/quera.png";
import rokla from "assets/images/sponsors/rokla.png";
import shab from "assets/images/sponsors/shab.png";
import yektanet from "assets/images/sponsors/yektanet.png";

export const sponsorsList: Sponsor[] = [
  {
    title: "لیارا",
    link: "https://liara.ir/",
    logo: liara,
  },
  {
    title: "کوئرا",
    link: "https://quera.ir/",
    logo: quera,
  },
  {
    title: "شب",
    link: "https://shab.ir/",
    logo: shab,
  },
  {
    title: "یکتانت",
    link: "https://yektanet.com/",
    logo: yektanet,
  },
  {
    title: "رکلا",
    link: "https://rokla.ir/",
    logo: rokla,
  },
  {
    title: "ای فور زی",
    link: "https://a4zi.com/",
    logo: a4zi,
  },
];

export interface Sponsor {
  title: string;
  link: string;
  logo: StaticImageData;
}
