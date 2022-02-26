import Image from "next/image";
import { socialMediaIcons } from "types";
import { socialMedia } from "data/social-media";
import logo from "assets/images/logo-vertical-dark.png";
import { RiPhoneLine } from "react-icons/ri";

const supportNumber = process.env.NEXT_PUBLIC_SUPPORT_NUMBER;

const Footer: React.FC<{}> = () => {
  return (
    <footer className="flex flex-col items-center space-y-6 bg-gray-900 py-7 md:py-9 lg:py-12">
      <figure className="flex">
        <Image src={logo} width={198} height={41} alt="فرانت چپتر" objectFit="contain" />
      </figure>
      <div className="flex items-center justify-center font-medium text-gray-300">
        <span>طراحی و توسعه با</span>
        <i className="ri-heart-fill mx-2 block animate-heartbeat align-middle text-xl leading-none text-red-500" />
        <span>در فرانت چپتر</span>
      </div>
      <a
        href={`tel:${supportNumber}`}
        className="flex items-center gap-1 rounded border px-3 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-gray-900"
      >
        <RiPhoneLine />
        <span>پشتیبانی تلفنی</span>
      </a>
      <div className="flex items-center gap-6">
        {socialMedia.map(({ name, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noreferrer" className="text-gray-200">
            <i className={`${socialMediaIcons[name]} block text-2xl leading-none`} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
