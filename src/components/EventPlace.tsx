import { FaGlobeAmericas, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const EventPlace = () => {
  return (
    <section id="place" className="bg-[#EEF9EF] sm:py-8 sm:px-14">
      <div className="container">
        <div className="card overflow-hidden rounded-xl bg-white">
          <div className="background-image">
            <h4 className="flex">
              <FaMapMarkerAlt className="ml-2 sm:ml-5 sm:text-5xl" />
              محل برگزاری
            </h4>
            <div className="rating">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <FaStar key={index} />
                ))}
            </div>
          </div>
          <div className="content mt-14 px-6 py-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="basis-8/12">
                <div className="flex h-[100%] flex-col justify-between">
                  <h5 className="mb-3 text-2xl font-bold text-[#4B5563] sm:mb-0">
                    هتل میزبان بابلسر
                  </h5>
                  <p className="text-[18px] text-[#6B7280]">
                    هتل میزبان بابلسر در کیلومتر سه کمربندی بابلسر به مساحت بیش از ۷۰۰۰ متر مربع،
                    واقع گردیده است که با نمای قله‌ی شکوهمند دماوند و نمای شالیزار، شهر و دریا
                    منظره‌ی بی همتایی را ایجاد کرده که موجب اعجاب جهانیان است.
                  </p>
                  <div className="my-4 mb-3 flex flex-col gap-2 sm:my-0 sm:flex-row sm:gap-4">
                    <a
                      target="_blank"
                      href="http://mizban-group.com/"
                      className="inline-flex justify-center rounded border-2 border-secondary px-3 py-1 align-baseline text-secondary hover:bg-secondary-hover hover:text-white"
                      rel="noreferrer"
                    >
                      <FaGlobeAmericas className="mt-1 ml-1" />
                      <span>سایت هتل میزبان</span>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/mizbanhotel/"
                      className="inline-flex justify-center rounded border-2 border-[#374151] px-3 py-1 align-baseline text-[#374151] hover:bg-[#374151] hover:text-white"
                      rel="noreferrer"
                    >
                      <FaGlobeAmericas className="mt-1 ml-1" />
                      <span>اینستاگرام هتل</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="basis-4/12">
                <iframe
                  width="100%"
                  height={220}
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=52.63209164142609%2C36.6886481478241%2C52.63562947511674%2C36.69069357650528&layer=mapnik&marker=36.68966979355623%2C52.633861899375916"
                />
                <small>
                  <a
                    target="_blank"
                    href="https://www.openstreetmap.org/?mlat=36.68967&mlon=52.63386#map=19/36.68967/52.63386"
                    rel="noreferrer"
                  >
                    مشاهده روی نقشه
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPlace;
