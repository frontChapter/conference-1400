import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import { TopNav } from "./TopNav";

export const TopNavbar: React.FC<{}> = () => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white">
      <div className="container flex flex-row items-center py-3 mx-auto">
        <div>
          <Link href="/">
            <a>
              <figure className="w-12 h-12">
                <Image
                  src={logo}
                  priority
                  objectFit="contain"
                  width={48}
                  height={48}
                />
              </figure>
            </a>
          </Link>
        </div>
        <div className="mr-2">
          <TopNav />
        </div>
      </div>
    </div>
  );
};
