import { Sponsor, sponsorsList } from "data/sponsors-data";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-9 md:py-12 lg:py-16">
      <div className="container">
        <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
          حامیان مالی و معنوی فرانت چپتر
        </h3>
      </div>
      <div className="my-9 bg-white py-9">
        <Slider sponsors={sponsorsList} />
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
          className="flex items-center justify-center rounded border border-primary px-3 py-2 text-primary transition hover:bg-primary hover:text-white"
        >
          <i className="ri-hand-heart-fill ml-1 text-xl leading-none" />
          <span className="font-medium">حامی میشوم</span>
        </a>
      </div>
    </section>
  );
};

const Slider: React.FC<{ sponsors: Sponsor[] }> = ({ sponsors }) => {
  return (
    <Swiper
      speed={1500}
      loop={true}
      modules={[Autoplay]}
      slidesPerView={"auto"}
      loopedSlides={sponsors.length}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
    >
      {sponsors.map((sponsor, index) => (
        <SwiperSlide key={index} style={{ width: "auto !important" }}>
          <Sponsor {...sponsor} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Sponsor: React.FC<Sponsor> = ({ link, title, logo }: Sponsor) => (
  <div className="flex h-16 items-center px-12">
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex grayscale transition hover:grayscale-0"
    >
      <Image
        src={logo}
        objectFit="contain"
        alt={title}
        title={title}
        className="text-transparent"
        layout="fill"
      />
    </a>
  </div>
);

export default Sponsors;
