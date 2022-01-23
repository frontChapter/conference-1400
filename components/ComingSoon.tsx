import Head from "next/head";
import Image from "next/image";
import logo from "../assets/images/logo.svg";

export const ComingSoon: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>فرانت چپتر تو راهه</title>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <main className="bg-slate-100 flex flex-col items-center justify-center min-h-screen">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-lg">
              <figure className="w-20">
                <Image src={logo} alt="لوگو فرانت چپتر" />
              </figure>
              <h1 className="mt-4 text-4xl font-bold leading-loose">
                فرانت چپتر تو راهه!
              </h1>
              <h2 className="text-3xl font-bold leading-loose">
                منتظرمون باشید
              </h2>
              <div className="mt-8">
                <a
                  target="_blank"
                  href="https://t.me/FrontChapter"
                  className="text-[#1e98d4] inline-block ml-4 leading-none"
                >
                  <i className="ri-telegram-fill ri-2x"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/frontChapter/"
                  className="text-[#e1306c] inline-block leading-none"
                >
                  <i className="ri-instagram-line ri-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

