import Head from "next/head";
import Image from "next/image";
import logo from "assets/images/logo.svg";

export const ComingSoon: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>فرانت چپتر تو راهه</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8">
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
                  className="ml-4 inline-block leading-none text-[#1e98d4]"
                  rel="noreferrer"
                >
                  <i className="ri-telegram-fill ri-2x"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/frontChapter/"
                  className="inline-block leading-none text-[#e1306c]"
                  rel="noreferrer"
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
