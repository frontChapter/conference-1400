import Link from "next/link";

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
    title: "برنامه همایش",
    href: "/#schedule",
  },
  {
    title: "حامیان",
    href: "/#sponsors",
  },
  {
    title: "برنامه سفر",
    href: "/#place",
  },
  {
    title: "تیم برگزاری",
    href: "/#team",
  },
];

export const TopNav: React.FC<{}> = () => {
  return (
    <nav className="py-4">
      <ul className="flex flex-col space-y-5 lg:flex-row lg:space-x-4 lg:space-y-0 lg:space-x-reverse">
        {items.map(({ title, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a className="text-gray-500 transition hover:text-gray-900">
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
