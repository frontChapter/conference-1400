import { speaker, speakersList } from "data/speakders-data";
import Image from "next/image";

const ListItem = ({ photo, name, position, company, brandClass }: speaker) => (
  <div className={"flex w-44 flex-col items-center"}>
    <figure className="h-32 w-32 overflow-hidden rounded-2xl">
      <Image src={photo} objectFit="contain" width={128} height={128} alt={name} />
    </figure>
    <strong className="my-2 max-w-full truncate text-center text-lg font-medium text-gray-600">
      {name}
    </strong>
    <span className="truncate text-center font-medium text-gray-500">{position}</span>
    <span
      className={
        "mt-1 truncate text-center font-medium " + (brandClass ? brandClass : "text-gray-500")
      }
    >
      {company}
    </span>
  </div>
);

const Speakers = () => {
  return (
    <div id="speakers" className="container py-8 lg:py-24">
      <h4 className="mb-8 text-center text-2xl font-black leading-normal text-primary lg:text-4xl">
        ارائه دهندگان
      </h4>
      <div className="flex justify-center">
        <div className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-y-16 md:gap-x-16 lg:gap-x-6 xl:gap-x-8">
          {speakersList.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
