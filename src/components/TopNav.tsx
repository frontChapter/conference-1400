import Link from "next/link";
import { useEffect } from "react";
import Gumshoe from "gumshoejs";

const items = [
  {
    title: "فرانت چپتر",
    href: "/",
  },
  {
    title: "سخنران‌ها",
    href: "/#speakers",
  },
  {
    title: "برنامه سفر",
    href: "/#trip",
  },
  {
    title: "برنامه همایش",
    href: "/#schedule",
  },
  {
    title: "حامیان",
    href: "/#sponsors",
  },
  {
    title: "محل برگزاری",
    href: "/#place",
  },
  // {
  //   title: "تیم برگزاری",
  //   href: "/#team",
  // },
];

interface Props {
  collapsed: boolean;
  setNavCollapse: (state: boolean) => void;
}

const TopNav: React.FC<Props> = ({ collapsed, setNavCollapse }) => {
  const itemClickHandler = (href: string) => {
    const selector = href.substring(1);
    window.jump(selector || "body");
  };

  useEffect(() => {
    new Gumshoe(".topnav-items a", {
      navClass: "text-gray-900",
      nested: false,
      offset: 72,
    });
  }, []);

  return (
    <nav className={"collapse lg:collapsed duration-500" + (collapsed ? " collapsed" : "")}>
      <ul className="topnav-items flex flex-col lg:flex-row lg:space-x-7 lg:space-x-reverse">
        {items.map(({ title, href }, index) => (
          <li key={index} className="text-gray-500 transition hover:text-gray-900">
            <Link href={href}>
              <a
                className="block py-4 text-lg lg:py-0"
                onClick={(e) => {
                  e.preventDefault();
                  setNavCollapse(false);
                  itemClickHandler(href);
                }}
              >
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
