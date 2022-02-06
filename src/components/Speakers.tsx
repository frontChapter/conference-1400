import { speaker, speakersList } from "data/speakders-data";
import Image from "next/image";

const ListItem = ({ photo, name, title }: speaker) => (
  <div className="basis-1/5">
    <div className="flex flex-col items-center">
      <figure className="h-32 w-32">
        <Image src={photo} priority objectFit="contain" width={128} height={128} alt={name} />
      </figure>
      <span className="mt-1.5 max-w-[8rem] text-center text-lg font-medium text-[#4B5563]">
        {name}
      </span>
      <span className="mt-1.5 max-w-[8rem] text-center text-xs font-medium text-[#6B7280]">
        {title}
      </span>
    </div>
  </div>
);

const Speakers = () => {
  return (
    <div id="speakers" className="container py-16">
      <h4 className="mb-8 text-center text-4xl font-bold leading-loose text-primary">
        ارائه دهندگان
      </h4>
      <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-0 sm:gap-y-4">
        {speakersList.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
