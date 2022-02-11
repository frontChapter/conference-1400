import Image from "next/image";

const Liara = "/images/sponsors/liara.png";
const Quera = "/images/sponsors/quera.png";
const Shab = "/images/sponsors/shab.png";
const A4Zi = "/images/sponsors/a4zi.png";

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
    title: "ای فور زی",
    link: "https://a4zi.com/",
    logo: A4Zi,
  },
  {
    title: "شب",
    link: "https://shab.ir/",
    logo: Shab,
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
    <section id="sponsors" className="container py-9 md:py-12 lg:py-16">
      <div className="sponsors">
        <div className="container">
          <div className="">
            <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
              حامیان مالی و معنوی فرانت چپتر
            </h3>
            <div className="mx-auto max-w-2xl">
              <div className="flex flex-row flex-wrap justify-center">
                {sponsorsList.map((item, index) => (
                  <ListItem key={index} {...item} />
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-500">
                فرانت چپتر برای ادامه و گسترش فعالیت های خود در جهت افزایش آگاهی جامعه فرانت اند و
                همچنین برگزاری چنین رویداد هایی نیاز به حمایت های شما دارد.
              </p>
              <div className="mt-8 justify-items-center text-center">
                <a
                  href="https://t.me/ordinarySaleh"
                  target="_blank"
                  className="hover:bg-primary-500 cursor-pointer rounded border border-primary bg-transparent px-4 py-2 text-primary hover:border-transparent hover:bg-primary hover:text-white"
                  rel="noreferrer"
                >
                  حامی میشوم
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
