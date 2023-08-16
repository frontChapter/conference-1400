import Image from "next/image";

const EventPlace: React.FC<{}> = () => {
  return (
    <section id="place" className="bg-light-green py-9 md:py-12 lg:py-16">
      <div className="container flex flex-col items-center space-y-4 md:space-y-6 lg:space-y-9">
        <div className="flex items-center justify-center">
          <i className="ri-map-pin-2-fill block text-2xl leading-none text-secondary"></i>
          <h3 className="mr-4 text-center text-2xl font-black leading-normal text-secondary md:text-28 lg:text-4xl">
            محل برگزاری
          </h3>
        </div>
        <Hotel />
      </div>
    </section>
  );
};

const Hotel: React.FC<{}> = () => {
  return (
    <div className="rounded-3xl bg-white p-6 sm:p-9 xl:py-16 xl:px-20">
      <div className="flex flex-col-reverse md:flex-row md:items-stretch">
        {/* Right / Bottom */}
        <div className="flex basis-3/5 flex-col justify-between md:pl-6 xl:pl-16 2xl:basis-1/2">
          <h4 className="mb-5 text-3xl font-bold text-gray-900">هتل میزبان بابلسر</h4>
          <div className="text-lg leading-relaxed text-gray-600 md:font-medium">
            همایش سالانه فرانت چپتر در هتل میزبان بابلسر برگزار میشه. این شهر ساحلی و زیبا که به
            نگین استان مازندران هم معروفه، یکی از خوش آب و هواترین شهرهای این منطقه به شمار میره و
            با داشتن جاذبه‌های گردشگری زیادی مثل: پل معلق بابلسر، رودخانه بابلرود و اسکله قایقرانی،
            منطقه ساحلی میرود، شهرک‌های ساحلی خزرشهر و دریاکنار، انواع تفریحات ساحلی و ... میتونه
            یکی از بهترین گزینه‌ها برای یه سفر جذاب و هیجان انگیز همراه با شرکت در رویداد فرانت چپتر
            باشه. همان طور که گفتیم این رویداد در یکی از بزرگ‌ترین و معروف‌ترین هتل‌ این شهر یعنی
            میزبان که مشرف به دریای خزر و رشته کوه البرز و قله دماوند است، برگزار میشه و امیدواریم
            بتوانیم به بهترین نحو پذیرای شما عزیزان باشیم.
          </div>
          <div className="my-8 flex items-center justify-center md:my-5 md:justify-start 2xl:my-12">
            <a
              href="https://www.eghamat24.com/BabolsarHotels/Mizban2Hotel.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-secondary px-5 py-2 font-bold text-white transition hover:bg-secondary-hover md:text-lg"
            >
              <span className="md:hidden">هتل در اقامت ۲۴</span>
              <span className="hidden md:block">صفحه هتل در سایت اقامت ۲۴</span>
            </a>
            <a
              href="https://www.instagram.com/mizbanhotel/"
              target="_blank"
              rel="noreferrer"
              className="mr-5"
            >
              <i className="ri-instagram-line block text-3xl leading-none text-gray-500" />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <figure className="h-[70px]">
              <Image
                src="/images/mizban-hotel-map.jpg"
                height={70}
                width={200}
                objectFit="cover"
                objectPosition="right center"
                alt="هتل میزبان روی نقشه"
                className="text-transparent"
                sizes="(max-width: 639px) 560px,(max-width: 767px) 552px,(max-width: 1023px) 384px,(max-width: 1279px) 528px,(max-width: 1535px) 570px, 714px"
              />
            </figure>
            <a
              href="https://goo.gl/maps/aqqqTHxmfiERH44S7"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
            >
              <div className="text-lg font-semibold text-white">لوکیشن هتل روی نقشه</div>
            </a>
          </div>
        </div>

        {/* Left / Top */}
        <div className="mb-8 flex basis-2/5 flex-col md:mb-0 2xl:basis-1/2">
          <div className="z-10 flex items-center justify-center space-x-1 space-x-reverse self-center rounded-3xl bg-white p-2 shadow sm:py-4 sm:px-5">
            {[...Array(5)].map((x, y) => (
              <figure key={y} className="w-4 sm:w-6">
                <Image src="/images/icons/star.png" width={24} height={22} alt="⭐️" />
              </figure>
            ))}
          </div>
          <div className="relative -mt-5 flex aspect-video items-stretch overflow-auto rounded-3xl sm:-mt-8 md:aspect-auto md:h-full">
            <Image
              src="/images/mizban-hotel.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="left center"
              alt="هتل میزبان"
              className="block h-full w-full leading-none text-transparent"
              sizes="(max-width: 639px) 640px,(max-width: 767px) 552px,(max-width: 1023px) 272px,(max-width: 1279px) 368px,(max-width: 1535px) 423px, 519px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPlace;
