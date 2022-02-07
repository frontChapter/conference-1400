import miladMoafi from "assets/images/speakers/milad_moafi.jpg";
import amirAliGholi from "assets/images/speakers/amirali_gholi.jpg";
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
    showByDefault: false,
    expandable: false,
  },
  {
    time: "10:30",
    type: "presentation",
    title: "سفر در زمان (بازگشت به دوران استاتیک سایت‌ها)",
    showByDefault: true,
    expandable: true,
    content: `
      توی این ارائه امیرعلی برامون از چالش‌هایی که راه‌انداخت یک استاتیک بلاگ برای توی یک سطح تجاری داشته برامون میگه، اینکه چرا این راه رو انتخاب کردن و چه مشکلاتی رو حل کردند
    `,
    speaker: {
      name: "امیرعلی قلی",
      avatar: amirAliGholi,
      links: {
        linkedin: "https://www.linkedin.com/in/gholi-dev",
        github: "https://github.com/gholi-dev",
      },
    },
  },
  {
    time: "10:50",
    type: "management",
    title: "میان برنامه‌ی اول",
    showByDefault: false,
    expandable: false,
  },
  {
    time: "11:00",
    type: "presentation",
    title: "عنوان ارائه‌ی دوم",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "نام ارائه‌دهنده",
      avatar: speaker2,
      links: {
        website: "https://google.com",
        linkedin: "https://linkedin.com",
      },
    },
  },
  {
    time: "11:20",
    type: "management",
    title: "میان برنامه‌ی دوم",
    showByDefault: false,
    expandable: false,
  },
  {
    time: "11:30",
    type: "presentation",
    title: "عنوان ارائه‌ی سوم",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "نام ارائه‌دهنده",
      avatar: speaker2,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "11:50",
    type: "break",
    title: "پذیرایی و استراحت اول",
    showByDefault: false,
    expandable: false,
  },
  {
    time: "12:30",
    type: "talk",
    title: "چجوری یک پروژه مقیاس‌پذیر رو شروع کنیم",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "میلاد معافی",
      avatar: miladMoafi,
      links: {
        twitter: "https://twitter.com/milixof/",
        linkedin: "https://www.linkedin.com/in/milixov",
      },
    },
  },
  {
    time: "13:30",
    type: "management",
    title: "معرفی مسابقه",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
  },
  {
    time: "14:00",
    type: "break",
    title: "نهار و استراحت",
    expandable: true,
    content: `برای صرف نهار و استراحت بین دو نیمه به سالن لادن میریم و نهار رو کنار هم هستیم
            منوی نهار برای علاقه‌مندان به شرح زیر است
            <br />
            سبزی پلو با گوشت گوساله | سالاد فصل | نوشابه قوطی و دوغ | آب معدنی | خورش مرغ با آلوچه وحشی و اناردون و برنج سفید`,
  },
  {
    time: "15:30",
    type: "management",
    title: "اعلام برنده‌ی مسابقه و توییت برتر",
    showByDefault: false,
    expandable: false,
  },
  {
    time: "16:00",
    type: "presentation",
    title: "عنوان ارائه‌ی چهارم",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "نام ارائه‌دهنده",
      avatar: speaker2,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "16:20",
    type: "management",
    title: "میان برنامه‌ی سوم",
    showByDefault: false,
    expandable: false,
  },
  {
    time: "16:30",
    type: "presentation",
    title: "ارائه‌ی پنجم",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "نام ارائه‌دهنده",
      avatar: speaker2,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "16:50",
    type: "break",
    title: "پذیرایی و استراحت عصر",
    showByDefault: false,
    expandable: false,
  },
  {
    time: "17:30",
    type: "talk",
    title: "پنل گفت‌وگو",
    expandable: true,
    content:
      "جواد جوادی با نیم قرن تجربه در مباحثی مثل فرانت‌اند و بک‌اند مهارت بسیار زیادی در این مورد دارد که با ارائه در مورد روش‌های بهینه کردن برنامه‌های توسعه در زمینه‌ی برنامه‌نویسی به دنبال باشد. در این روز با برگزاری دوره‌ی آموزشی برای آموزش کاربردهای برنامه‌نویسی به دنبال باشد.",
    speaker: {
      name: "نام ارائه‌دهندگان",
      avatar: speaker2,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  {
    time: "18:30",
    type: "management",
    title: "اهدای جوایز و اختتامیه",
    showByDefault: false,
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
