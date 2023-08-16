import Image from "next/image";

const sponsorsList = [
  {
    title: "لیارا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
  {
    title: "دیجی‌کالا",
    link: "https://digikala.com/",
    logo: "/images/sponsors/liara.png",
  },
];

type IListItemType = {
  link: string;
  title: string;
  logo: string;
};

const ListItem = ({ link, title, logo }: IListItemType) => (
  <div className="basis-1/4 px-3">
    <a href={link} target="_blank" rel="noreferrer">
      <Image width={300} height={100} src={logo} alt={title} title={title} />
    </a>
  </div>
);

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="my-14">
        <h1 className="mb-8 text-center text-4xl font-bold leading-loose text-primary">
          حامی های مالی و معنوی فرانت چپتر
        </h1>
        <div className="mx-auto max-w-xl">
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
              حامی می‌شوم
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
