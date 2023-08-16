import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="bg-white py-9 md:py-12 lg:py-16">
      <div className="container flex flex-col items-center justify-center md:flex-row">
        <div className="flex aspect-square w-52 max-w-full shrink-0 items-center justify-center rounded-3xl bg-blue-500 p-8 md:basis-64 md:p-12 lg:basis-80">
          <Image
            src="/images/ducks-talking.png"
            objectFit="contain"
            alt="مکالمه"
            className="text-transparent"
            width={300}
            height={200}
          />
        </div>
        <div className="mt-6 flex max-w-lg flex-col space-y-6 md:mt-0 md:max-w-2xl md:pr-8 lg:pr-12">
          <h3 className="text-2xl font-black text-gray-900 sm:text-3xl lg:text-4xl">
            درباره فرانت چپتر
          </h3>
          <p className="font-medium leading-7 text-gray-500 md:text-lg">
            اینجا محلی صمیمی برای گفت‌وگوی تخصصی هست. توی فرانت چپتر هر دو هفته یک بار، دور هم جمع
            میشیم و درمورد چالش هایی که بهشون برخوردیم گپ و گفت میکنیم.
            <br />
            تا الان تونستیم بالای ۴۰ ساعت جلسات آنلاین داشته باشیم و چالش‌های فرانت‌اند مختلف رو
            باهم بررسی کردیم.
          </p>
          <div className="flex flex-wrap items-center justify-center sm:space-x-6 sm:space-x-reverse md:justify-start">
            <a
              href="https://t.me/FrontChapter"
              target="_blank"
              rel="noreferrer"
              className="m-4 flex w-52 items-center justify-center rounded bg-[#1e98d4] py-2 text-white transition-colors hover:bg-[#1879a9] sm:m-0"
            >
              <i className="ri-telegram-fill ml-2 block text-lg leading-none" />
              <span className="font-medium">کانال تلگرام فرانت چپتر</span>
            </a>
            <a
              href="https://instagram.com/FrontChapter"
              target="_blank"
              rel="noreferrer"
              className="group relative m-4 flex w-52 items-center justify-center overflow-hidden rounded bg-gradient-to-tr from-[#ff9504] via-[#e30c81] to-[#7600f8] py-2 text-white sm:m-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#cf7700] via-[#b50967] to-[#5e00c6] opacity-0 transition group-hover:opacity-100"></div>
              <i className="ri-instagram-fill z-10 ml-2 block text-lg leading-none" />
              <span className="z-10 font-medium">اینستاگرام فرانت چپتر</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
