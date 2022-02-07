const TripSteps = () => {
  return (
    <section
      id="trip"
      className="flex flex-col items-center justify-between bg-gradient-to-br from-[#DE4103] to-[#F08423] p-8 text-center sm:p-14"
    >
      <div className="container px-0">
        <h4 className="text-[36px] font-bold text-white">نگران مسیر و اقامت نباشید!</h4>
        <p className="hidden pt-4 text-[18px] text-white sm:block">
          یکی از مهم ترین هدف‌های این همایش برای ما، پیدا کردن رفقای تازه هست! سفر کمک میکنه بهترین
          رفیق‌ها رو پیدا کنیم و با کلی آدم تازه آشنا بشیم. توی این سفر با ما همراه باشید که کلی
          اتفاق هیجان انگیز رو قرار هست کنار هم تجربه کنیم
        </p>
        <div className="mt-12 flex flex-col">
          <div className="flex flex-row">
            <ul className="stepper text-white">
              <li>
                <span>اقامت راحت</span>
                <p>
                  یک شب به یادموندنی رو کنار هم تجربه می‌کنیم و با نمای دریا، کنار آتیش و جمع دوستای
                  تازمون شب رو صبح می‌کنیم
                </p>
              </li>
              <li>
                <span> نهار و پذیرایی</span>
                <p>
                  توی سالن لادن هتل میزبان دور هم نهار می‌خوریم و یه بحث خوب پای نهاری پیدا می‌کنیم
                  که سر صحبت رو باز کنیم با رفقای تازه‌مون
                </p>
              </li>
              <li>
                <span>رفت و آمد با اتوبوس</span>
                <p>
                  می‌خواید از تهران بیاید تا بابلسر اما احساس تنهایی می‌کنید؟ هیچ کس تنها نیست! اگر
                  دوست دارید می‌تونید بیاید با هم بریم!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripSteps;
