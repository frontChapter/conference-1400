// import miladMoafi from "assets/images/speakers/milad-moafi.png";
import miladAzami from "assets/images/speakers/milad-azami.png";
import amirAliGholi from "assets/images/speakers/amirali-gholi.png";
import sobhanAminNejad from "assets/images/speakers/sobhan-amin-nejad.png";
import mohammadMahmoodi from "assets/images/speakers/mohammad-mahmoodi.png";
import mrAla from "assets/images/speakers/mohammadreza-ala.png";
import mrIranmanesh from "assets/images/speakers/mohammadreza-iranmanesh.png";
import rezaMosavi from "assets/images/speakers/reza-mosavi.png";

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
    time: "10:10",
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
        instagram: "https://instagram.com/gholi-dev",
      },
    },
  },
  {
    time: "10:40",
    type: "presentation",
    title: "توسعه‌ی مقیاس‌پذیر زیرساخت فرانت‌اند",
    showByDefault: true,
    expandable: true,
    content:
      "توی این ارائه محمدرضا در مورد زیرساخت فرانت‌اند دیوار و چالش‌هایی که حل کردن مثل dynamic serving و SSR غیره صحبت میکنه",
    speaker: {
      name: "محمدرضا ایرانمنش",
      avatar: mrIranmanesh,
      links: {
        website: "https://imohammadreza.ir/",
        twitter: "https://twitter.com/iMohammadReza_",
        instagram: "https://www.instagram.com/imohammadreza.ir/",
        github: "https://github.com/iMohammadReza",
        linkedin: "https://www.linkedin.com/in/mohammadrezairanmanesh/",
      },
    },
  },
  {
    time: "11:00",
    type: "break",
    title: "استراحت صبح",
    expandable: false,
  },
  {
    time: "11:20",
    type: "talk",
    title: "معرفی ابزارهای ساخته‌شده به دست بچه‌های حاضر در صحنه",
    showByDefault: true,
    expandable: false,
  },
  {
    time: "11:40",
    type: "presentation",
    title: "پیاده سازی ایزومرفیک وب اپلیکیشن با رندرترون",
    showByDefault: true,
    expandable: true,
    content:
      "استفاده از از رندرترون به عنوان استاتیک رندرینگین انجین برای بهبود پرفرمنس و سئو ی وب اپلییکیشن های تک صفحه ای",
    speaker: {
      name: "محمدرضا اعلا",
      avatar: mrAla,
      links: {
        linkedin: "https://www.linkedin.com/in/mohammadrezala/",
        instagram: "https://www.instagram.com/mhmdrz_a/",
      },
    },
  },
  {
    time: "12:10",
    type: "presentation",
    title: "Core web vitals",
    showByDefault: true,
    expandable: true,
    content:
      "Core web vitals ابتکاری توسط Google است که بتوان با اندازه‌گیری آن‌ها تجربه‌کاربری کاربران در وب را سنجید. هر یک از Core Web Vitals نمایانگر جنبه‌ای از تجربه کاربر است، و به صورت میدانی قابل اندازه‌گیری است و تجربه دنیای واقعی یک کاربر را منعکس می‌کند. در این ارائه تجربه باسلام را برای بهبود core web vitals ارائه میکنیم",
    speaker: {
      name: "سید رضا موسوی",
      avatar: rezaMosavi,
      links: {
        linkedin: "https://www.linkedin.com/in/rmoosavi/",
      },
    },
  },
  {
    time: "12:30",
    type: "talk",
    title: "مشارکت تیمی در شرکت‌های بزرگ",
    showByDefault: true,
  },
  {
    time: "13:30",
    type: "break",
    title: "ناهار و استراحت",
    expandable: true,
    content: "برای صرف ناهار و استراحت بین دو نیمه به سالن لادن میریم و ناهار رو کنار هم هستیم.",
  },
  {
    time: "15:00",
    type: "management",
    title: "اعلام مسابقه",
  },
  {
    time: "13:30",
    type: "management",
    title: "معرفی مسابقه",
    expandable: true,
    content:
      "با همکاری کوئرا یک مسابقه‌ی جذاب طراحی کردیم که با برنده شدن داخلش علاوه بر گرفتن هدیه‌های یادبود، به شرکت‌های بزرگ فناوری ایران هم توسط کوئرا برای استخدام معرفی می‌شوید.",
  },
  {
    time: "15:20",
    type: "presentation",
    title: "واقعیت‌های دنیای برنامه‌نویسی",
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
    time: "15:50",
    type: "presentation",
    title: "JAM Stack",
    showByDefault: true,
    expandable: true,
    content:
      "بررسی معماری جدید توسعه وب بر پایه جاوا اسکریپت سمت کاربر، Api های قابل استفاده مجدد و markup های از پیش ساخته",
    speaker: {
      name: "سبحان امین‌نژاد",
      avatar: sobhanAminNejad,
      links: {
        linkedin: "https://www.linkedin.com/in/sobhan-aminnejad/",
        instagram: "https://www.instagram.com/aminnejads/",
      },
    },
  },
  {
    time: "16:10",
    type: "break",
    title: "پذیرایی و استراحت عصر",
  },
  {
    time: "16:40",
    type: "presentation",
    title: "پرفورمنس",
    showByDefault: true,
    expandable: true,
    content:
      "پرفورمنس نرم‌افزار همیشه مورد توجه برنامه‌نویس‌ها بوده. بهینه‌سازی و بالا بردن بهره‌وری کد و در نهایت خلق تجربه‌ی کاربری بهتر. در این ارائه به طور کلی به پرفورمنس در وب نوین پرداخته میشه. در مورد اینکه کی پرفورمنس برای ما مهم میشه؟ چه پارامترها و متریک‌هایی رو باید محاسبه کینم؟ نیازمندی‌ها، چالش‌های فنی محاسبه‌ی پرفورمنس و استفاده از ابزار‌های مانیتورینگ صحبت می‌کنیم",
    speaker: {
      name: "محمد محمودی",
      avatar: mohammadMahmoodi,
      links: {
        linkedin: "https://www.linkedin.com/in/mohammad-mahmoudi-a7280376/",
      },
    },
  },
  {
    time: "17:20",
    type: "management",
    title: "اهدای جوایز و اختتامیه",
    content: "اهدای هدایا به میهمانان افتخاری و سخنران‌ها | نظرسنجی | دعوت به حضور و مشارکت",
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
