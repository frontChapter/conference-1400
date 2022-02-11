import miladMoafi from "assets/images/speakers/milad-moafi.png";
import miladAzami from "assets/images/speakers/milad-azami.png";
import amirAliGholi from "assets/images/speakers/amirali-gholi.png";
import speaker2 from "assets/images/speakers/speaker-2.jpg";
import speaker3 from "assets/images/speakers/speaker-3.jpg";
import speaker4 from "assets/images/speakers/speaker-4.jpg";
import speaker5 from "assets/images/speakers/speaker-5.jpg";

export const itemsData: item[] = [
  {
    time: "9:00",
    type: "management",
    title: "پذیرش مهمان‌ها",
  },
  {
    time: "10:00",
    type: "management",
    title: "مقدمه و معرفی همایش",
  },
  {
    time: "10:30",
    type: "presentation",
    title: "سفر در زمان (بازگشت به دوران سایت‌های استاتیک)",
    showByDefault: true,
    expandable: true,
    content:
      "توی این ارائه امیرعلی برامون از چالش‌هایی که راه‌انداخت یک استاتیک بلاگ برای توی یک سطح تجاری داشته برامون میگه، اینکه چرا این راه رو انتخاب کردن و چه مشکلاتی رو حل کردند",
    speaker: {
      name: "امیرعلی قلی",
      avatar: amirAliGholi,
      links: {
        linkedin: "https://www.linkedin.com/in/gholi-dev",
        github: "https://github.com/gholi-dev",
      },
    },
  },
  // {
  //   time: "10:50",
  //   type: "management",
  //   title: "میان برنامه‌ی اول",
  // },
  {
    time: "11:00",
    type: "presentation",
    title: "واقعیت های دنیای برنامه نویسی",
    showByDefault: true,
    expandable: true,
    content:
      "یادگیری برنامه نویسی چقدر طول میکشه؟ پیدا کردن کار راحته؟ تو شهرستان هم میتونم کار بکنم؟ اصلا حقوق برنامه نویسی چقدره؟",
    speaker: {
      name: "میلاد اعظمی",
      avatar: miladAzami,
      links: {
        linkedin: "https://www.linkedin.com/in/milad-azami-b226631b5/",
        instagram: "https://www.instagram.com/javascript.front/",
      },
    },
  },
  // {
  //   time: "11:20",
  //   type: "management",
  //   title: "میان برنامه‌ی دوم",
  // },
  {
    time: "11:30",
    type: "presentation",
    title: "چطور یک پروژه مقیاس‌پذیر رو شروع کنیم",
    showByDefault: true,
    expandable: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    speaker: {
      name: "میلاد معافی",
      avatar: miladMoafi,
      links: {
        linkedin: "https://www.linkedin.com/in/milixov",
        twitter: "https://twitter.com/milixof/",
      },
    },
  },
  {
    time: "11:50",
    type: "break",
    title: "پذیرایی و استراحت ظهر",
  },
  {
    time: "12:30",
    type: "talk",
    title: "پنل گفت‌وگو اول با مشارکت میهمانان",
    expandable: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    speaker: {
      name: "مجری پنل",
      avatar: speaker3,
      links: {
        twitter: "",
        linkedin: "",
      },
    },
  },
  {
    time: "13:30",
    type: "management",
    title: "معرفی مسابقه",
    expandable: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    time: "14:00",
    type: "break",
    title: "نهار و استراحت",
    expandable: true,
    content:
      "برای صرف نهار و استراحت بین دو نیمه به سالن لادن میریم و نهار رو کنار هم هستیم. منوی نهار برای علاقه‌مندان به شرح زیر است:" +
      "\n" +
      "سبزی پلو با گوشت گوساله / سالاد فصل / نوشابه قوطی و دوغ / آب معدنی / خورش مرغ با آلوچه وحشی و اناردون و برنج سفید",
  },
  {
    time: "15:30",
    type: "management",
    title: "اعلام برنده‌ی مسابقه و توییت برتر",
  },
  {
    time: "16:00",
    type: "presentation",
    title: "عنوان ارائه‌ی چهارم",
    showByDefault: true,
    expandable: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    speaker: {
      name: "نام ارائه‌دهنده",
      avatar: speaker4,
      links: {
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
        mastodon: "https://mastodon.social",
      },
    },
  },
  // {
  //   time: "16:20",
  //   type: "management",
  //   title: "میان برنامه‌ی سوم",
  // },
  {
    time: "16:30",
    type: "presentation",
    title: "ارائه‌ی پنجم",
    showByDefault: true,
    expandable: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    speaker: {
      name: "نام ارائه‌دهنده",
      avatar: speaker5,
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
  },
  {
    time: "17:30",
    type: "talk",
    title: "پنل گفت‌وگو دوم با مشارکت میهمانان",
    showByDefault: true,
    expandable: true,
    content:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    speaker: {
      name: "مجری پنل",
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
