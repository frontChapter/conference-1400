// import miladMoafi from "assets/images/speakers/milad-moafi.png";
import miladAzami from "assets/images/speakers/milad-azami.png";
import amirAliGholi from "assets/images/speakers/amirali-gholi.png";
import sobhanAminNejad from "assets/images/speakers/sobhan.jpg";
import mohammadMahmoodi from "assets/images/speakers/mohammad_mahmoodi.jpg";
import speaker3 from "assets/images/speakers/speaker-3.jpg";
import mrAla from "assets/images/speakers/mohammadreza-ala.png";

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
      "در اولین بخش امیرعلی تجربیاتش رو درباره‌ چالش‌ها، مشکلات و راه حل‌های راه‌اندازی یک وبلاگ استاتیک در سطح تجاری با ما به اشتراک میذاره.",
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
    time: "11:00",
    type: "presentation",
    title: "واقعیت های دنیای برنامه نویسی",
    showByDefault: true,
    expandable: true,
    content:
      "یادگیری برنامه نویسی چقدر طول میکشه؟ پیدا کردن کار راحته؟ تو شهرستان هم میتونم کار بکنم؟ اصلا حقوق برنامه نویسی چقدره؟",
    speaker: {
      name: "میلاد عظمی",
      avatar: miladAzami,
      links: {
        linkedin: "https://www.linkedin.com/in/milad-azami-b226631b5/",
        instagram: "https://www.instagram.com/javascript.front/",
      },
    },
  },
  {
    time: "11:30",
    type: "presentation",
    title: "پیاده سازی ایزومرفیک وب اپلیکیشن با رندرترون",
    showByDefault: true,
    expandable: true,
    content:
      "استفاده از از رندرترون به عنوان استاتیک رندرینگین انجین برای بهبود پرفرمنس و سئو ی وب اپلییکیشن های تک صفحه‌ای",
    speaker: {
      name: "محمد رضا اعلا",
      avatar: mrAla,
      links: {
        linkedin: "https://www.linkedin.com/in/mohammadrezala/",
        instagram: "https://www.instagram.com/mhmdrz_a/",
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
    title: "ورک‌شاپ تخصصی زیر کاپوت جاوااسکریپت",
    expandable: true,
    content: "",
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
      "با همکاری کوئرا یک مسابقه‌ی جذاب طراحی کردیم که با برنده شدن داخلش علاوه بر گرفتن هدیه‌های یادبود، به شرکت‌های بزرگ فناوری ایران هم توسط کوئرا برای استخدام معرفی می‌شوید",
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
    title: "JAMStack",
    showByDefault: true,
    expandable: true,
    content:
      "بررسی معماری جدید توسعه وب بر پایه جاوااسکریپت سمت کاربر، Api های قابل استفاده مجدد و markup های از پیش ساخته",
    speaker: {
      name: "سبحان امین‌نژاد",
      avatar: sobhanAminNejad,
      links: {
        instagram: "https://www.instagram.com/aminnejads/",
        linkedin: "https://www.linkedin.com/in/sobhan-aminnejad/",
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
    title: "پرفورمنس وب",
    showByDefault: true,
    expandable: true,
    content:
      "پرفورمنس نرم‌افزار همیشه مورد توجه برنامه‌نویس ها بوده. بهینه‌سازی و بالا بردن بهره‌وری کد و در نهایت خلق تجربه‌ی کاربری بهتر. در این ارائه به طور کلی به پرفورمنس در وب نوین پرداخته میشه. در مورد اینکه کی پرفورمنس برای ما مهم میشه؟ چه پارامترها و متریک هایی رو باید محاسبه کینم؟ نیازمندی‌ها، چالش‌های فنی محاسبه‌ی پرفورمنس و استفاده از ابزار های مانیتورینگ صحبت می‌کنیم",
    speaker: {
      name: "محمد محمودی",
      avatar: mohammadMahmoodi,
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
    title: "پنل گفت‌وگو مشارک تیمی در شرکت‌های بزرگ با مشارکت میهمانان",
    showByDefault: true,
    expandable: true,
    content:
      "بچه‌های شرکت‌های دیوار، اسنپ و باسلام از تجربه‌هاشون درمورد اینکه تیم‌های نامتمرکز توی یک شرکت چطوری با هم دیگه کار می‌کنند و کارها چطوری تقسیم میشه و پیش میره برامون میگن و ما هم هر پرسشی داشتیم در این مورد باهاشون مطرح می‌کنیم",
    speaker: {
      name: "محمد ایرانمنش - محمدعلی سلطانی‌پور - محمدرضا اعلا",
      avatar: speaker3,
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
