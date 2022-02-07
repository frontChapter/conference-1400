import axios from "axios";
import Swal from "sweetalert2";
import { FormEvent, useEffect, useState } from "react";

type status = keyof typeof buttonBgClass;

const buttonBgClass = {
  default: "bg-primary",
  loading: "bg-primary opacity-80",
  success: "bg-secondary",
};

const buttonIconClass = {
  default: "ri-send-plane-fill -rotate-135",
  loading: "ri-loader-4-line animate-spin",
  success: "ri-check-fill",
};

const buttonText = {
  default: "عضو میشم",
  loading: "یه لحظه...",
  success: "عضو شدی",
};

const publicAccountID = process.env.NEXT_PUBLIC_ELASTIC_ACCOUNT_ID;
const apiURL = "https://api.elasticemail.com/v2/contact/add";

const Subscribe: React.FC<{}> = () => {
  let [email, setEmail] = useState("");
  const [status, setStatus] = useState<status>("default");

  const alertOptions = {
    confirmButtonText: "باشه",
    buttonsStyling: false,
    customClass: {
      confirmButton: "rounded-xl bg-blue-500 px-4 py-3 text-white outline-none",
    },
  };

  useEffect(() => {
    const persistedEmail = localStorage.getItem("subscribe_email");
    if (persistedEmail) {
      setEmail(persistedEmail);
      setStatus("success");
    }
  }, []);

  const subscribeHandler = (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    axios
      .get(apiURL, {
        params: {
          email,
          publicAccountID,
        },
      })
      .then(({ data }) => {
        if (data.success) {
          setStatus("success");
          localStorage.setItem("subscribe_email", email);

          Swal.fire({
            ...alertOptions,
            title: "حله!",
            text: "برای تایید عضویت ایمیلت رو چک کن.",
            icon: "success",
          });
        } else {
          if (data.messageid === "contact_invalid_email") {
            setStatus("default");

            Swal.fire({
              ...alertOptions,
              title: "یه چیزی درست نیست!",
              text: "مطمئنی آدرس ایمیل رو درست وارد کردی؟",
              icon: "warning",
              confirmButtonText: "بستن",
            });
          } else {
            throw new Error("");
          }
        }
      })
      .catch(() => {
        setStatus("default");

        Swal.fire({
          ...alertOptions,
          title: "اوووپس!",
          text: "یه مشکلی پیش اومده! لطفا دوباره امتحان کن.",
          icon: "error",
        });
      });
  };

  const button = (
    <button
      className={
        "flex items-center rounded-full py-3 px-4 text-white transition " + buttonBgClass[status]
      }
      disabled={status !== "default"}
    >
      <div className="ml-2">{buttonText[status]}</div>
      <i className={"block text-[21px] font-bold leading-none " + buttonIconClass[status]} />
    </button>
  );

  return (
    <section className="container flex justify-center py-4 sm:py-8">
      <div className="flex flex-1 flex-col items-center space-y-6 rounded-3xl bg-[#f8f7f2] py-8 px-6 lg:py-12">
        <h3 className="text-2xl font-black text-gray-600">از اینا بیشترم هست!</h3>
        <p className="max-w-3xl text-center text-lg text-gray-500">
          میتونی با عضو شدن توی خبرنامه فرانت چپتر، علاوه بر مطلع شدن از تاریخ جلسات و شرکت توی
          اونها، از رویدادها و همکاری‌های فرانت چپتر با بقیه جامعه‌های برنامه نویسی باخبر بشی.
          <br />
          درضمن قول می‌دیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)
        </p>
        <div className="w-full max-w-lg">
          <form onSubmit={subscribeHandler}>
            <div className="flex items-center rounded-full bg-white p-4">
              <div className="border-l-2 border-gray-100 px-3 pl-3">
                <i className="ri-mail-unread-fill block text-2xl leading-none text-gray-600" />
              </div>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={status !== "default"}
                required
                dir="ltr"
                type="email"
                placeholder="آدرس ایمیل شما"
                className={
                  "w-full grow pr-3 font-medium text-gray-500 outline-none placeholder:text-right sm:w-auto" +
                  (status !== "default" ? " cursor-default" : "")
                }
              />

              <div className="mr-3 hidden sm:block">{button}</div>
            </div>

            <div className="mt-4 flex justify-center sm:hidden">{button}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
