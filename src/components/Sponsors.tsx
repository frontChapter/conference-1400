import Image from "next/image";

const Liara = "/images/sponsors/liara.png";
const Quera = "/images/sponsors/quera.png";
const Shab = "/images/sponsors/shab.png";
const A4Zi = "/images/sponsors/a4zi.png";
const Yektanet = "/images/sponsors/yektanet.png";
const Rokla = "/images/sponsors/rokla.jpg";

const sponsorsList = [
  {
    title: "لیارا",
    link: "https://liara.ir/",
    logo: Liara,
  },
  {
    title: "کوئرا",
    link: "https://quera.ir/",
    logo: Quera,
  },
  {
    title: "شب",
    link: "https://shab.ir/",
    logo: Shab,
  },
  {
    title: "یکتانت",
    link: "https://yektanet.com/",
    logo: Yektanet,
  },
  {
    title: "رکلا",
    link: "https://rokla.ir/",
    logo: Rokla,
  },
  {
    title: "ای فور زی",
    link: "https://a4zi.com/",
    logo: A4Zi,
  },
];

type IListItemType = {
  link: string;
  title: string;
  logo: string | StaticImageData;
};

const ListItem = ({ link, title, logo }: IListItemType) => (
  <div className="basis-1/4 px-3">
    <a href={link} target="_blank" rel="noreferrer">
      <Image objectFit="contain" width={200} height={100} src={logo} alt={title} title={title} />
    </a>
  </div>
);

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-9 md:py-12 lg:py-16">
      <div className="container">
        <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
          حامیان مالی و معنوی فرانت چپتر
        </h3>
      </div>
      <div className="my-9 bg-white py-9">
        {/* {sponsorsList.map((item, index) => (
                <ListItem key={index} {...item} />
              ))} */}
        slideeeer
      </div>
      <div className="container flex flex-col items-center">
        <p className="mb-9 max-w-3xl text-center text-gray-500 sm:w-2/3">
          از اونجایی که همایش فرانت چپتر یه رویداد نوپاست و در جهت گسترش آگاهی جامعه فرانت‌اند
          فعالیت می‌کنه، پس به حمایت‌ها و پشتیبانی شما برای پیشرفت و ارتقا این جامعه نیازمندیم.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://t.me/ordinarySaleh"
          className="flex items-center justify-center rounded border border-primary py-2 px-3 text-primary transition hover:bg-primary hover:text-white"
        >
          <i className="ri-hand-heart-fill ml-1 text-xl leading-none" />
          <span className="font-medium">حامی میشوم</span>
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
