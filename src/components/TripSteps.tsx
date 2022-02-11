const TripSteps: React.FC<{}> = () => {
  return (
    <section id="trip" className="container flex flex-col items-center py-9 md:py-12 lg:py-16">
      <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
        نگران مسیر و اقامت نباشید!
      </h3>
      <p className="mb-5 text-center font-medium leading-relaxed text-gray-500 sm:w-5/6 md:mb-0 md:text-lg lg:w-3/5">
        یکی از مهم ترین هدف‌های این همایش برای ما، پیدا کردن رفقای تازه هست! سفر کمک میکنه بهترین
        رفیق‌ها رو پیدا کنیم و با کلی آدم تازه آشنا بشیم. توی این سفر با ما همراه باشید که کلی اتفاق
        هیجان انگیز رو قرار هست کنار هم تجربه کنیم.
      </p>
      <Lines />
      <div className="flex flex-wrap justify-center self-stretch">
        <Step
          icon="ri-bus-2-fill"
          title="رفت و آمد با اتوبوس"
          text="می‌خواید از تهران بیاید تا بابلسر اما احساس تنهایی می‌کنید؟ هیچ کس تنها نیست! اگر دوست دارید می‌تونید بیاید با هم بریم!"
        />
        <Step
          icon="ri-community-fill"
          title="اقامت راحت"
          text=" یک شب به یادموندنی رو کنار هم تجربه می‌کنیم و با نمای دریا، کنار آتیش و جمع دوستای تازمون شب رو صبح می‌کنیم"
        />
        <Step
          icon="ri-restaurant-2-fill"
          title="پذیرایی با غذای محلی"
          text="توی سالن لادن هتل میزبان دور هم نهار می‌خوریم و یه بحث خوب پای نهاری پیدا می‌کنیم که سر صحبت رو باز کنیم با رفقای تازه‌مون"
        />
      </div>
    </section>
  );
};

const Step: React.FC<{ icon: string; title: string; text: string }> = ({ icon, title, text }) => {
  return (
    <div className="mb-5 flex basis-full flex-col items-center space-y-2 py-4 px-6 last:mb-0 sm:basis-1/2 md:basis-1/3">
      <i
        className={`${icon} block rounded-full bg-gray-100 p-6 text-3xl leading-none text-primary`}
      />
      <h4 className="text-xl font-medium leading-normal text-gray-600">{title}</h4>
      <p className="text-center text-gray-500 2xl:px-10">{text}</p>
    </div>
  );
};

const Lines: React.FC<{}> = () => {
  return (
    <div className="hidden translate-y-16 justify-center self-stretch md:flex">
      <div className="flex w-64 basis-1/3 items-center px-20">
        <hr className="basis-1/2 border-gray-500 opacity-40" />
        <i className="ri-arrow-drop-left-line block leading-none text-gray-500" />
        <hr className="basis-1/2 border-gray-500 opacity-40" />
      </div>
      <div className="flex w-64 basis-1/3 items-center px-20">
        <hr className="basis-1/2 border-gray-500 opacity-40" />
        <i className="ri-arrow-drop-left-line block leading-none text-gray-500" />
        <hr className="basis-1/2 border-gray-500 opacity-40" />
      </div>
    </div>
  );
};

export default TripSteps;
