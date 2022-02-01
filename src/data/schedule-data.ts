import speaker1 from "assets/images/avatars/speaker-1.png";
import speaker2 from "assets/images/avatars/speaker-2.png";

export const itemsData: item[] = [
  {
    time: "9:00",
    type: "management",
    title: "پذیرش مهمان‌ها",
    showByDefault: true,
    expandable: false,
  },
  {
    time: "10:00",
    type: "management",
    title: "مقدمه و معرفی همایش",
    showByDefault: true,
    expandable: false,
  },
  {
    time: "10:00",
    type: "management",
    title: "خداحافظ RestAPI سلام بر GraphQL",
    showByDefault: true,
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "کوروش بینوا",
      avatar: speaker1,
      links: {
        github: "https://github.com",
        instagram: "https://instagram.com",
      },
    },
  },
  {
    time: "10:00",
    type: "management",
    title: "مقدمه و معرفی همایش",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "رعنا خوشه",
      avatar: speaker2,
      links: {
        website: "https://google.com",
        linkedin: "https://linkedin.com",
      },
    },
  },
  {
    time: "10:00",
    type: "management",
    title: "پذیرایی و استراحت ظهر",
    showByDefault: true,
    expandable: false,
  },
  {
    time: "10:00",
    type: "management",
    title: "مقدمه و معرفی همایش",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "جواد جوادی",
      avatar: speaker1,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "10:00",
    type: "management",
    title: "ناهار و استراحت",
    showByDefault: true,
    expandable: false,
  },
];

export interface item {
  time: string;
  type: keyof typeof planIcons;
  title: string;
  /**
   * shown in summary view
   */
  showByDefault?: boolean;
  expandable?: boolean;
  content?: string;
  speaker?: {
    name: string;
    avatar: StaticImageData;
    links?: links;
  };
}

export type links = {
  [key in keyof typeof socialMediaIcons]?: string;
};

export const planIcons = {
  management: "ri-flag-fill",
  break: "ri-restaurant-2-fill",
  presentation: "ri-slideshow-2-fill",
  talk: "ri-mic-2-fill",
};

export const socialMediaIcons = {
  github: "ri-github-fill",
  twitter: "ri-twitter-fill",
  linkedin: "ri-linkedin-fill",
  instagram: "ri-instagram-fill",
  facebook: "ri-facebook-fill",
  website: "ri-earth-fill",
  mastodon: "ri-mastodon-fill",
};
