import Image from "next/image";
import Avatar from "../public/images/avatar.png";

const speakersList = [
  {
    name: "رنیکا مشهدی",
    title: "توسعه‌دهنده‌ی فرانت‌اند در تربچه",
    photo: Avatar,
  },
  {
    name: "ام‌کلثوم زینت پرست",
    title: "توسعه‌دهنده‌ی فرانت‌اند در kolsom soft",
    photo: Avatar,
  },
  {
    name: "کوروش بینوا",
    title: "UI-Developer در مایکروهارد",
    photo: Avatar,
  },
  {
    name: "رعنا خوشه",
    title: "Co-Founder در زی‌زی سافت",
    photo: Avatar,
  },
  {
    name: "جواد جوادی",
    title: "توسعه‌دهنده‌ی فرانت‌اند در نوین توسعه گران آوار",
    photo: Avatar,
  },
];

type IListItemType = {
  photo: string | StaticImageData;
  name: string;
  title: string;
};

const ListItem = ({ photo, name, title }: IListItemType) => (
  <div className="basis-1/5">
    <div className="flex flex-col items-center">
      <figure className="w-32 h-32">
        <Image
          src={photo}
          priority
          objectFit="contain"
          width={128}
          height={128}
          alt={name}
        />
      </figure>
      <span className="mt-1.5 max-w-[8rem] text-center text-lg font-medium text-[#4B5563]">
        {name}
      </span>
      <span
        className="mt-1.5 max-w-[8rem] text-center text-xs font-medium text-[#6B7280]"
        text-center
      >
        {title}
      </span>
    </div>
  </div>
);

const Speakers = () => {
  return (
    <div className="my-14">
      <h4 className="mb-8 text-4xl font-bold leading-loose text-center text-primary">
        ارائه دهندگان
      </h4>
      <div className="flex flex-row flex-wrap gap-4 justify-center sm:gap-0 sm:gap-y-4">
        {speakersList.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
