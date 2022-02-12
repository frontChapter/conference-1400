import Image from "next/image";
import { speaker, speakersList } from "data/speakders-data";

const Speakers = () => {
  return (
    <section id="speakers" className="container py-9 md:py-12 lg:py-16">
      <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
        ارائه دهندگان
      </h3>
      <div className="flex justify-center">
        <div className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-8 md:gap-y-16 md:gap-x-16 lg:gap-x-6 xl:gap-x-8">
          {speakersList.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ListItem = ({
  photo,
  name,
  position,
  companyName,
  companyLogo,
  brandClass,
  hideCompanyPrefix,
}: speaker) => (
  <div className="flex w-44 flex-col items-center space-y-4 rounded-3xl bg-white px-3 py-6">
    <figure className="h-32 w-32">
      <Image
        src={photo}
        objectFit="contain"
        width={128}
        height={128}
        alt={name}
        className="rounded-2xl bg-slate-200 text-transparent"
      />
    </figure>
    <strong className="w-full truncate text-center text-lg font-bold text-gray-600">{name}</strong>
    <div className="flex w-full flex-col space-y-2">
      <span className="truncate text-center font-medium text-gray-500">{position}</span>
      <div className="flex items-center justify-center">
        {!hideCompanyPrefix && (
          <span className="ml-2 text-center font-medium text-gray-500">در</span>
        )}
        {companyLogo ? (
          <figure className="flex">
            <Image src={companyLogo} alt={companyName} />
          </figure>
        ) : (
          <span
            className={
              "truncate text-center font-medium " + (brandClass ? brandClass : "text-gray-500")
            }
          >
            {companyName}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default Speakers;
