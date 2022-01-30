import Image from "next/image";
import bg from "assets/images/jumbotron-bg.jpg";
import logo from "assets/images/logo.png";
import WaveSvg from "assets/images/jumbotron-wave.svg?inline";

const Jumbotron: React.FC<{}> = () => {
  return (
    <div className="container py-8">
      <div className="relative overflow-hidden rounded-[20px] py-8 px-4 sm:rounded-[75px] md:pt-20 md:pb-28">
        <Image
          alt="تصویر همایش"
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="flex relative flex-col items-center">
          <div className="flex items-center">
            <figure className="ml-3 w-6 h-6 md:h-12 md:w-12">
              <Image
                src={logo}
                priority
                objectFit="contain"
                width={48}
                height={48}
                alt="فرانت چپتر"
              />
            </figure>
            <span className="text-xl font-medium text-white md:text-3xl">
              فرانت چپتر
            </span>
          </div>

          <div className="mt-6 md:mt-12">
            <h1 className="text-center font-heading text-4xl text-white md:text-[64px] md:leading-tight">
              {`بزرگ ترین `}
              <br className="lg:hidden" />
              {`همایش `}
              <span className="text-primary">فرانت‌اند</span>
              {` کشور`}
            </h1>
          </div>

          <div className="flex justify-center items-center mt-4 text-white">
            <i className="ml-2 leading-none ri-map-pin-2-line md:text-2xl" />
            <div className="md:text-2xl">۱۰ اسفند ۱۴۰۰</div>
            <div className="mx-2 md:mx-4 md:text-2xl">-</div>
            <i className="ml-2 leading-none ri-calendar-line md:text-2xl" />
            <div className="md:text-2xl">مازندران، بابلسر</div>
          </div>

          <div className="mt-12">
            <a
              href="https://evand.com/events/frontchapter-1400"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1 font-bold rounded-3xl shadow-md btn-orange md:px-7 md:text-2xl md:leading-10"
            >
              ثبت نام
            </a>
          </div>
        </div>

        <WaveSvg className="hidden absolute bottom-0 left-1/2 text-gray-50 -translate-x-1/2 md:block" />
        <div className="hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 md:block">
          <i className="block text-4xl leading-none text-gray-800 animate-bounce ri-arrow-down-s-line" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
