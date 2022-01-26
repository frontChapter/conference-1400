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
    <nav>
      <ul className="flex space-x-4 space-x-reverse">
        {items.map(({ title, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a className="hover:text-gray-900 text-gray-500 transition">{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
