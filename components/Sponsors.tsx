import Image from "next/image";
import Digikala from "../public/images/logo diji kala.png";

// const speakersList = [
//   {
//     name: "رنیکا مشهدی",
//     title: "توسعه‌دهنده‌ی فرانت‌اند در تربچه",
//     photo: Avatar,
//   },
//   {
//     name: "ام‌کلثوم زینت پرست",
//     title: "توسعه‌دهنده‌ی فرانت‌اند در kolsom soft",
//     photo: Avatar,
//   },
//   {
//     name: "کوروش بینوا",
//     title: "UI-Developer در مایکروهارد",
//     photo: Avatar,
//   },
//   {
//     name: "رعنا خوشه",
//     title: "Co-Founder در زی‌زی سافت",
//     photo: Avatar,
//   },
//   {
//     name: "جواد جوادی",
//     title: "توسعه‌دهنده‌ی فرانت‌اند در نوین توسعه گران آوار",
//     photo: Avatar,
//   },
// ];

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="my-14">
        <h1 className="mb-8 text-4xl font-bold leading-loose text-center text-primary">
          حامی های مالی و معنوی فرانت چپتر
        </h1>
        <div className="mx-auto max-w-xl">
          <div className="flex flex-row flex-wrap justify-center">
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
            <div className="px-3 basis-1/4">
              <Image layout="responsive" src={Digikala} alt="dijikala logo" />
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            فرانت چپتر برای ادامه و گسترش فعالیت های خود در جهت افزایش آگاهی
            جامعه فرانت اند و همچنین برگزاری چنین رویداد هایی نیاز به حمایت های
            شما دارد.
          </p>
          <div className="justify-items-center mt-8 text-center">
            <a
              href="https://t.me/ordinarySaleh"
              target="_blank"
              className="px-4 py-2 bg-transparent rounded border cursor-pointer hover:bg-primary-500 border-primary text-primary hover:border-transparent hover:bg-primary hover:text-white"
              rel="noreferrer"
            >
              حامی میشوم
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
