import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiPhoneLine } from "react-icons/ri";
import HamburgerButton from "./HamburgerButton";
import TopNav from "./TopNav";

const supportNumber = process.env.NEXT_PUBLIC_SUPPORT_NUMBER;

const TopNavbar: React.FC<{}> = () => {
  let [navCollapsed, setNavCollapse] = useState<boolean>(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white">
      <div className="container flex flex-row flex-wrap items-center justify-between py-3 lg:justify-start">
        <div className="order-1 h-9 w-9 basis-1/3 lg:hidden">
          <HamburgerButton collapsed={navCollapsed} setNavCollapse={setNavCollapse} />
        </div>
        <div className="order-2 basis-1/3 lg:ml-6 lg:basis-auto">
          <Link href="/">
            <a
              className="flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault();
                window.jump("body");
              }}
            >
              <Image
                src="/images/logo.png"
                priority
                objectFit="contain"
                width={48}
                height={48}
                alt="فرانت چپتر"
              />
            </a>
          </Link>
        </div>
        <div className="order-3 flex basis-1/3 items-center justify-end lg:order-4 lg:mr-auto lg:basis-auto">
          <a
            href={`tel:${supportNumber}`}
            className="ml-6 hidden items-center gap-1 rounded-full font-medium text-gray-700 xl:flex"
          >
            <RiPhoneLine className="text-xl" />
            <span>پشتیبانی تلفنی</span>
          </a>
          <a
            href="https://evand.com/events/frontchapter-1400"
            target="_blank"
            rel="noreferrer"
            className="btn-orange rounded-3xl px-4 py-1 font-medium shadow-md md:px-6 md:text-lg md:leading-9"
          >
            ثبت نام
          </a>
        </div>
        <div className="order-3 w-full lg:order-3 lg:w-auto">
          <TopNav collapsed={navCollapsed} setNavCollapse={setNavCollapse} />
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
