import Image from "next/image";
import bg from "assets/images/jumbotron-bg.jpg";
import logo from "assets/images/logo.png";
import WaveSvg from "assets/images/jumbotron-wave.svg?inline";

export const Jumbotron: React.FC<{}> = () => {
  return (
    <div className="container py-8">
      <div className="relative overflow-hidden rounded-[75px] pt-20 pb-28">
        <Image
          alt="Mountains"
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="relative flex flex-col items-center">
          <div className="flex items-center">
            <figure className="ml-3 h-12 w-12">
              <Image
                src={logo}
                priority
                objectFit="contain"
                width={48}
                height={48}
                alt="فرانت چپتر"
              />
            </figure>
            <span className="text-3xl font-medium text-white">فرانت چپتر</span>
          </div>

          <div className="mt-12">
            <h1 className="font-heading text-[64px] text-white">
              {`بزرگترین همایش `}
              <span className="text-primary">فرانت‌اند</span>
              {` کشور`}
            </h1>
          </div>

          <div className="mt-4 flex items-center justify-center text-white">
            <i className="ri-map-pin-2-line ri-xl ml-2" />
            <div className="text-2xl">۱۰ اسفند ۱۴۰۰</div>
            <div className="mx-4 text-2xl">-</div>
            <i className="ri-calendar-line ri-xl ml-2" />
            <div className="text-2xl">مازندران، بابلسر</div>
          </div>

          <div className="mt-12">
            <a
              href="https://evand.com/events/frontchapter-1400"
              target="_blank"
              rel="noreferrer"
              className="btn-orange rounded-3xl px-7 py-1 text-2xl font-bold leading-10 shadow-md"
            >
              ثبت نام
            </a>
          </div>

          {/* TODO: Add wave and arrow on bottom */}
        </div>

        <WaveSvg className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 text-gray-50 md:block" />
        <i className="ri-arrow-down-s-line absolute bottom-0 left-1/2 hidden -translate-x-1/2 text-4xl leading-none text-gray-800 md:block" />
      </div>
    </div>
  );
};
