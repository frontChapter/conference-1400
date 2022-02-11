import Axios from "axios";
import React from "react";
import {
  RiAncientPavilionFill,
  RiCommunityFill,
  RiRestaurant2Fill,
  RiStarFill,
  RiStarLine,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { HouseCardItemProps, IHouseType } from "types/house";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

const SHAB_API_URL =
  "https://www.shab.ir/api/fa/sandbox/v_1_4/house?city[]=%D8%A8%D8%A7%D8%A8%D9%84%D8%B3%D8%B1&perpage=12&is_descending[price]=1";

type IActiveTabType = "houses" | "places" | "restaurants";

const HouseItem = ({
  id,
  title,
  type,
  rooms,
  is_instant,
  location,
  rank,
  cover_photo,
  pricing,
  reviews,
  mehman_navaz,
}: HouseCardItemProps) => {
  const getType = (type: IHouseType) => {
    switch (type) {
      case "apartment":
        return "آپارتمان";
      case "villa":
        return "ویلا";
      case "boomgardi":
        return "بوم‌گردی";
      case "cottage":
        return "کلبه";
      default:
        return "نامشخص";
    }
  };

  const stars = Number(Math.floor(rank));

  return (
    <a href={`https://www.shab.ir/houses/show/${id}?sortby=5`} target="_blank" rel="noreferrer">
      <Image
        className="rounded-lg"
        alt="Picture of the author"
        width={400}
        height={250}
        src={cover_photo.thumbnail_absolute_url}
      />
      <div className="flex gap-1">
        {is_instant && (
          <div className="rounded bg-primary px-2 py-1 text-xs text-white">تحویل آنی</div>
        )}
        <div className="px-2 py-1 text-xs text-[#6B7280]">{getType(type)}</div>
        <div className="px-2 py-1 text-xs text-[#6B7280]">
          {rooms ? `${digitsEnToFa(rooms)} خوابه` : "بدون اتاق"}
        </div>
        <div className="px-2 py-1 text-xs text-[#6B7280]">
          {location.province}، {location.city}
        </div>
      </div>
      <div className="mt-1 text-xl text-[#1F2937]">{title}</div>
      <div className="mt-1 text-lg text-[#4B5563]">
        هر شب از {digitsEnToFa(addCommas(pricing.min_price.amount))} تومان
      </div>
      <div className="flex gap-1">
        <div className="flex gap-1 text-primary">
          <span className="flex">
            {Array(stars)
              .fill(null)
              .map((_, index) => (
                <RiStarFill key={index} />
              ))}
            {Array(5 - stars)
              .fill(null)
              .map((_, index) => (
                <RiStarLine key={index} />
              ))}
          </span>
          <span className="text-sm text-[#1F2937]">{digitsEnToFa(rank)}</span>
        </div>
        <span className="text-sm text-[#6B7280]">({digitsEnToFa(reviews)}) نظر</span>
        {!!mehman_navaz && <span className="text-sm text-[#6B7280]">مهمان نواز</span>}
      </div>
    </a>
  );
};

const TripSights = () => {
  const [activeTab, setActiveTab] = React.useState<IActiveTabType>("houses");
  const [houses, setHouses] = React.useState<HouseCardItemProps[]>([]);

  React.useEffect(() => {
    if (activeTab === "houses") {
      Axios.get(SHAB_API_URL).then(({ data: { data } }) => setHouses(data.records));
    }
  }, [activeTab]);

  const getClassNames = (type: IActiveTabType) =>
    `sights-tab ${activeTab === type ? "active" : ""}`;

  return (
    <section id="trip-sights" className="bg-[#eef9ef] py-16">
      <div className="container flex flex-col items-center space-y-9">
        <div className="w-[100%] rounded-3xl bg-white p-5 sm:p-9 xl:py-16 xl:px-20">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center">
              <h5 className="text-center text-2xl font-bold text-[#4B5563] sm:text-right">
                یک ماجراجویی جذاب در دل شمال
              </h5>
              <span className="text-center text-lg text-[#6B7280] sm:text-right">
                برای اسکان می‌توانید از مراکز معرفی شده استفاده کنید
              </span>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={() => setActiveTab("houses")} className={getClassNames("houses")}>
                <RiCommunityFill />
                اقامتگاه ها
              </button>
              <button onClick={() => setActiveTab("places")} className={getClassNames("places")}>
                <RiAncientPavilionFill />
                دیدنی ها
              </button>
              <button
                onClick={() => setActiveTab("restaurants")}
                className={getClassNames("restaurants")}
              >
                <RiRestaurant2Fill />
                رستوران ها
              </button>
            </div>
            <div className="mt-6">
              <Swiper
                dir="rtl"
                spaceBetween={10}
                slidesPerView={1.1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                {activeTab === "houses" &&
                  houses.map((house) => (
                    <SwiperSlide key={house.id}>
                      <HouseItem {...house} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripSights;
