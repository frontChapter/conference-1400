import Image from "next/image";
import Star from "assets/images/icons/star.png";
import MizbanHotel from "assets/images/mizban-hotel.jpg";
import MizbanHotelMap from "assets/images/mizban-hotel-map.jpg";

const EventPlace: React.FC<{}> = () => {
  return (
    <section id="place" className="bg-[#eef9ef] py-16">
      <div className="container flex flex-col items-center space-y-9">
        <div className="flex items-center justify-center">
          <i className="ri-map-pin-2-fill block text-2xl leading-none text-secondary"></i>
          <h3 className="mr-4 text-4xl font-black text-secondary">محل برگزاری</h3>
        </div>
        <Hotel />
      </div>
    </section>
  );
};

const Hotel: React.FC<{}> = () => {
  return (
    <div className="rounded-3xl bg-white p-9 xl:py-16 xl:px-20">
      <div className="flex flex-col-reverse md:flex-row md:items-stretch">
        {/* Right / Bottom */}
        <div className="flex basis-3/5 flex-col justify-between md:pl-6 xl:pl-16">
          <h4 className="mb-5 text-3xl font-bold text-gray-900">هتل میزبان بابلسر</h4>
          <div className="text-lg leading-relaxed text-gray-600 md:font-medium 2xl:pl-20">
            هتل پنج ستاره میزبان بابلسر، مشرف به دریای خزر و رشته کوه البرز و قله دماوند از تازه
            ساخت‌ترین مجموعه‌های بابلسر می‌باشد که ترکیبی از رستوران‌ها، واحدهای اقامتی و مرکز خرید
            است. پرسنل مجرب این هتل، آرامشی وصف نشدنی و اقامتی دلنشین را برای شما مهمانان گرامی
            آرزومندند.
          </div>
          <div className="my-8 flex items-center justify-center md:my-5 md:justify-start">
            <a
              href="https://www.eghamat24.com/BabolsarHotels/Mizban2Hotel.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-secondary py-2 px-5 font-bold text-white transition hover:bg-secondary-hover md:text-lg"
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
                src={MizbanHotelMap}
                layout="fill"
                objectFit="cover"
                objectPosition="right center"
                alt="هتل میزبان روی نقشه"
                className="text-transparent"
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
        <div className="mb-8 flex basis-2/5 flex-col md:mb-0">
          <div className="z-10 flex items-center justify-center space-x-1 space-x-reverse self-center rounded-3xl bg-white py-4 px-5 shadow">
            {[...Array(5)].map((x, y) => (
              <figure key={y}>
                <Image src={Star} width={24} height={22} alt="⭐️" />
              </figure>
            ))}
          </div>
          <div className="-mt-8 flex h-full items-stretch">
            <Image
              src={MizbanHotel}
              objectFit="cover"
              placeholder="blur"
              alt="هتل میزبان"
              className="block rounded-3xl leading-none text-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPlace;
