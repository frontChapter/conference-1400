import Image from "next/image";
import { Tweet } from "utils/getTweets";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Tweets: React.FC<{ tweets: false | Tweet[] }> = ({ tweets }) => {
  if (!tweets || tweets.length < 6) return null;

  return (
    <div className="py-8">
      <div className="container flex flex-col items-center justify-between sm:flex-row">
        <h2 className="text-2xl font-bold text-gray-600 md:text-2rem">
          <span>درباره</span>
          <span className="text-primary"> فرانت چپتر </span>
          <span>چی‌میگن؟</span>
        </h2>
        <div className="mt-6 flex flex-col text-gray-600 sm:mt-0">
          <a
            dir="ltr"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/hashtag/front_chapter_conf"
          >
            #front_chapter_conf
          </a>
          <a href="https://twitter.com/hashtag/همایش_فرانت_چپتر" target="_blank" rel="noreferrer">
            #همایش_فرانت_چپتر
          </a>
        </div>
      </div>

      {/* Tweets wrapper */}
      <div className="mt-8">
        <Slider tweets={tweets} />
      </div>
    </div>
  );
};

const Slider: React.FC<{ tweets: Tweet[] }> = ({ tweets }) => {
  return (
    <Swiper
      speed={1500}
      loop={true}
      modules={[Autoplay]}
      slidesPerView={"auto"}
      loopedSlides={tweets.length}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1024: {
          centeredSlides: false,
        },
      }}
    >
      {tweets.map((tweet, index) => (
        <SwiperSlide key={index} style={{ width: "auto !important" }}>
          <Tweet tweet={tweet} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Tweet: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  const author = tweet.author;

  return (
    <a href={tweet.url} target="_blank" rel="noreferrer" className="mx-3 block">
      <div className="tweet h-56 w-72 flex-none rounded-2xl bg-white px-6 py-3">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-end">
            <div className="ml-auto pl-2">
              <i className="ri-twitter-fill block text-2xl leading-none text-[#00b2ff]"></i>
            </div>
            <div className="flex min-w-0 max-w-full shrink grow-0 flex-col" dir="ltr">
              <div className="max-w-full truncate text-gray-900">{author.name}</div>
              <div className="mt-2 text-xs font-light text-gray-500">@{author.username}</div>
            </div>
            <div className="mr-3">
              <figure className="flex h-12 w-12">
                <Image
                  src={author.profile_image_url as string}
                  alt={author.name}
                  width={48}
                  height={48}
                  objectFit="contain"
                  className="rounded-full"
                />
              </figure>
            </div>
          </div>

          <div className="multi-truncate multi-truncate-5 mt-3 max-h-full leading-7 text-gray-500">
            {tweet.text}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Tweets;
