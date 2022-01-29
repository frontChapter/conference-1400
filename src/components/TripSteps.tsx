const TripSteps = () => {
  return (
    <div className="flex flex-col justify-between items-center p-14 text-center bg-primary">
      <h4 className="text-[36px] font-bold text-white">
        نگران مسیر و اقامت نباشید!
      </h4>
      <p className="pt-4 text-[18px] text-white">
        میتونید با عضو شدن توی خبرنامه فرانت چپتر، علاوه بر مطلع شدن از تاریخ
        جلسات و شرکت توی اونا، از رویداد ها و همکاری های فرانت چپتر با بقیه
        جامعه های برنامه نویسی باخبر بشید. درضمن قول می‌دیم که اسپم نکنیم و فقط
        اخبار مهم رو ارسال کنیم :)
      </p>
      <div className="flex flex-col mt-12">
        <div className="flex flex-row">
          <ul className="text-white stepper">
            <li>
              <span>اقامت راحت</span>
              <p>
                کنیم و بهمون اطلاع بدییم که این متن این قسمت چی میتونه باشه ولی
                تا اون موقع از جدی گرفتن این متن و سایر متن ها خود داری کنید
              </p>
            </li>
            <li>
              <span> نهار و پذیرایی</span>
              <p>
                می‌تونید محل سکونتتون رو به ما بسپارید تا این متن رو بعدا تکمیل
                کنیم و بهمون اطلاع بمت چی میتونه باشه ولی تا اون موقع از جدی
                گرفتن ها خود داری کنید
              </p>
            </li>
            <li>
              <span>رفت و آمد با اتوبوس</span>
              <p>
                می‌تونید محل سکونتتون رو به ما بسپارید تا این متن رو بعدا تکمیل
                تا اون موقع از جدی گرفتن این متن و سایر متن ها خود داری کنید
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripSteps;