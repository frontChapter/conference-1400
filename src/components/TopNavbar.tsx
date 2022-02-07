import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "assets/images/logo.png";
import HamburgerButton from "./HamburgerButton";
import TopNav from "./TopNav";

const TopNavbar: React.FC<{}> = () => {
  let [navCollapsed, setNavCollapse] = useState<boolean>(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white">
      <div className="container flex flex-row flex-wrap items-center justify-between py-3 lg:justify-start">
        <div className="order-1 h-9 w-9 lg:hidden">
          <HamburgerButton collapsed={navCollapsed} setNavCollapse={setNavCollapse} />
        </div>
        <div className="order-2 lg:ml-6">
          <Link href="/">
            <a
              onClick={(e) => {
                e.preventDefault();
                window.jump("body");
              }}
            >
              <figure className="h-12 w-12">
                <Image
                  src={logo}
                  priority
                  objectFit="contain"
                  width={48}
                  height={48}
                  alt="فرانت چپتر"
                />
              </figure>
            </a>
          </Link>
        </div>
        <div className="order-3 lg:order-4 lg:mr-auto">
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
