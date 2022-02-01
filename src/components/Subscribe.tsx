import MailIcon from "assets/images/mail.svg?inline";
import EmailSeparator from "assets/images/EmailSeparator.svg?inline";
import { useState } from "react";
import axios from "axios";

type IButtonStatus = { text: string; disabled: boolean };

const publicAccountID = process.env.NEXT_PUBLIC_ELASTIC_ACCOUNT_ID;
const apiURL = "https://api.elasticemail.com/v2/contact/add";

const Subscribe: React.FC<{}> = () => {
  let [email, setEmail] = useState<string>("");
  let [buttonStatus, setButtonStatus] = useState<IButtonStatus>({
    text: "عضو میشم",
    disabled: false,
  });

  const subscribeHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .get(apiURL, {
        params: {
          email,
          publicAccountID,
        },
      })
      .then(() => {
        setButtonStatus({
          text: "عضو شدی! :)",
          disabled: true,
        });
      })
      .catch((err) => {
        alert("مشکلی در ثبت وجود داشت، دوباره امتحان کنید");
        console.error({ err });
      });
  };

  return (
    <div className="sm:py-8">
      <div className="bg-subscribe">
        <h3 className="text-center">از اینا بیشترم هست!</h3>
        <p className="mx-auto text-center">
          میتونید با عضو شدن توی خبرنامه فرانت چپتر، علاوه بر مطلع شدن از تاریخ
          جلسات و شرکت توی اونا، از رویداد ها و همکاری های فرانت چپتر با بقیه
          جامعه های برنامه نویسی باخبر بشید.
          <br />
          درضمن قول می‌دیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)
        </p>
        <div className="email-section">
          <MailIcon
            className={
              buttonStatus.disabled ? "email-icon opacity-40" : "email-icon"
            }
          />

          <EmailSeparator className="email-separator" />
          <form onSubmit={subscribeHandler}>
            <input
              disabled={buttonStatus.disabled}
              className="email-input "
              placeholder="آدرس ایمیل ..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />

            <button
              className={
                buttonStatus.disabled
                  ? "btn-subscribe btn-green"
                  : "btn-subscribe btn-orange"
              }
              disabled={buttonStatus.disabled}
            >
              {buttonStatus.text}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
