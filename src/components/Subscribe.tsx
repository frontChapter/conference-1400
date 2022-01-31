
import MailIcon from "assets/images/mail.svg?inline";
import EmailSeparator from "assets/images/EmailSeparator.svg?inline"
import { useEffect, useState } from "react";

const Subscribe: React.FC<{}> = () => {

    let [email, setEmail] = useState("")
    let [subBtnClicked, setSubBtnClicked] = useState(false)

    function SubscribeHandler(){
        setSubBtnClicked(true)
            //Logic Goes here
    }


    return(
            <div className="pt-10 pb-10">
                <div className="bg-subscribe mx-auto rounded-lg">
                    <h3 className="text-center">از اینا بیشترم هست!</h3>

                    <p className="text-center mx-auto">میتونید با عضو شدن توی خبرنامه فرانت چپتر، علاوه بر مطلغ شدن از تاریخ جلسات و شرکت توی اونا، از رویدادها و همکاری های فرانت چپتر با بقیه جامعه های برنامه نویسی با خبر بشید.</p>
                    <p className="text-center mx-auto">در ضمن قول میدیم که اسپم نکنیم و فقط اخبار مهم رو ارسال کنیم :)</p>

                    <div className="relative email-input-section">

                        <MailIcon 
                        className={subBtnClicked ? "absolute email-icon opacity-40" : "absolute email-icon"}
                        />

                        <EmailSeparator 
                        className="absolute top-5 h-5 email-separator"/>

                        <input 
                        disabled={subBtnClicked ? true : false}
                        className="email-subscribe shadow-lg bg-white rounded-full mt-10 mx-auto text-gray-500 text-lg" 
                        placeholder="آدرس ایمیل ..."
                        onChange={(e) => setEmail(e.target.value)}
                        />

                        <button 
                        className={subBtnClicked ? "btn-orange opacity-40 p-3 rounded-full absolute top-2 left-40 h-15 btn-subscribe" : 'btn-orange p-3 rounded-full absolute top-2 left-40 h-15 btn-subscribe'}
                        onClick={() =>  SubscribeHandler()}
                        >عضو میشم</button>

                    </div>
                </div>
            </div>
    )
       
}
export default Subscribe;