import Image from "next/image";
import { socialMedia, socialMediaIcons } from "data/social-media";
import logo from "assets/images/logo-vertical-dark.png";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="flex flex-col items-center bg-gray-900 py-8 md:py-12">
      <figure className="mb-12">
        <Image src={logo} width={198} height={41} alt="فرانت چپتر" objectFit="contain" />
      </figure>
      <div className="flex items-center justify-center font-medium text-gray-300">
        <span>طراحی و توسعه با</span>
        <i className="ri-heart-fill mx-2 block animate-heartbeat align-middle text-xl leading-none text-red-500" />
        <span>در فرانت چپتر</span>
      </div>
      <div className="mt-6 flex items-center gap-6">
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
