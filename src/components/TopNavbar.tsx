import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "assets/images/logo.png";
import { HamburgerButton } from "./HamburgerButton";
import { TopNav } from "./TopNav";

export const TopNavbar: React.FC<{}> = () => {
  let [navCollapsed, setNavCollapse] = useState<boolean>(false);

  return (
    <div className="fixed inset-x-0 top-0 z-40 bg-white">
      <div className="container flex flex-row flex-wrap justify-between items-center py-3 lg:justify-start">
        <div className="order-1 w-9 h-9 lg:hidden">
          <HamburgerButton
            collapsed={navCollapsed}
            setNavCollapse={setNavCollapse}
          />
        </div>
        <div className="order-2">
          <Link href="/">
            <a>
              <figure className="w-12 h-12">
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
            className="px-6 py-1 text-xl font-bold leading-9 rounded-3xl shadow-md btn-orange"
          >
            ثبت نام
          </a>
        </div>
        <div className="order-3 w-full lg:order-3 lg:mr-2 lg:w-auto">
          <TopNav collapsed={navCollapsed} setNavCollapse={setNavCollapse} />
        </div>
      </div>
    </div>
  );
};
