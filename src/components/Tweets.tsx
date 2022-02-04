import Image from "next/image";
import { Tweet } from "utils/getTweets";

const Tweets: React.FC<{ tweets: false | Tweet[] }> = ({ tweets }) => {
  if (!tweets || tweets.length < 6) return null;

  return (
    <div className="py-8">
      <div className="container flex items-center justify-between">
        <h2 className="text-2rem font-bold text-gray-600">
          <span>درباره</span>
          <span className="text-primary"> فرانت چپتر </span>
          <span>چی‌میگن؟</span>
        </h2>
        <div className="flex flex-col text-gray-600">
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
      <div className="mt-8 flex flex-shrink-0 flex-grow-0 space-x-6 space-x-reverse overflow-auto px-6">
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

const Tweet: React.FC<{ tweet: Tweet }> = ({ tweet }) => {
  const author = tweet.author;

  return (
    <div className="tweet h-56 w-72 flex-none rounded-2xl bg-white px-6 py-4">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-end">
          <div className="ml-auto pl-2">
            <a href={tweet.url} target="_blank" rel="noreferrer">
              <i className="ri-twitter-fill block text-2xl leading-none text-[#00b2ff]"></i>
            </a>
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

        <div className="multi-truncate multi-truncate-5 mt-5 max-h-full text-gray-500">
          {tweet.text}
        </div>
      </div>
    </div>
  );
};

export default Tweets;
