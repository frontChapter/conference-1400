import Image from "next/image";
import logo from "assets/images/logo.png";
import WaveSvg from "assets/images/jumbotron-wave.svg?inline";

const Jumbotron: React.FC<{}> = () => {
  return (
    <div className="container py-9 md:py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-[20px] bg-blue-200 py-8 px-4 sm:rounded-[75px] md:pt-20 md:pb-28">
        <video
          className="absolute top-0 left-0 z-0 h-[100%] w-[100%] object-cover"
          muted
          loop
          autoPlay
          poster="/images/video_poster.jpg"
        >
          <source src="/videos/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-black opacity-60" />
        <div className="relative flex flex-col items-center">
          <div className="flex items-center">
            <figure className="ml-3 h-6 w-6 md:h-12 md:w-12">
              <Image
                src={logo}
                priority
                objectFit="contain"
                width={48}
                height={48}
                alt="فرانت چپتر"
              />
            </figure>
            <span className="text-xl font-medium text-white md:text-3xl">فرانت چپتر</span>
          </div>

          <div className="mt-6 md:mt-12">
            <h1 className="text-center font-heading text-4xl text-white md:text-[64px] md:leading-tight">
              {`اولین `}
              <br className="lg:hidden" />
              {`همایش `}
              <span className="text-primary">فرانت‌اند</span>
              {` کشور`}
            </h1>
          </div>

          <div className="mt-4 flex items-center justify-center text-white">
            <i className="ri-map-pin-2-line ml-2 leading-none md:text-2xl" />
            <div className="md:text-2xl">۱۰ اسفند ۱۴۰۰</div>
            <div className="mx-2 md:mx-4 md:text-2xl">-</div>
            <i className="ri-calendar-line ml-2 leading-none md:text-2xl" />
            <div className="md:text-2xl">مازندران، بابلسر</div>
          </div>

          <div className="mt-12">
            <a
              href="https://evand.com/events/frontchapter-1400"
              target="_blank"
              rel="noreferrer"
              className="btn-orange rounded-3xl px-4 py-1 font-bold shadow-md md:px-7 md:text-2xl md:leading-10"
            >
              ثبت نام
            </a>
          </div>
        </div>

        <WaveSvg className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 text-gray-50 md:block" />
        <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 translate-y-1 md:block">
          <i className="ri-arrow-down-s-line block animate-bounce text-4xl leading-none text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
