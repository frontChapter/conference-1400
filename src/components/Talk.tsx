import { speaker, speakersList } from "data/speakers-data";
import Image from "next/image";
import { socialMediaIcons, socialMediaLinks } from "types";

const Speakers = speakersList.filter((speaker) => speaker.talk);

const Talk: React.FC = () => {
  return (
    <section id="talk" className="bg-gray-900 py-9 md:py-12 lg:py-16">
      <div className="container flex flex-col items-center gap-9">
        <Image
          src="/images/talk-header.png"
          quality="100"
          alt="پنل گفتگو"
          className="text-transparent"
          width={200}
          height={100}
        />
        <div className="flex flex-col gap-2 text-center text-white">
          <span>موضوع گفتگو:</span>
          <h3 className="text-2xl font-black leading-normal md:text-4xl">
            ارتباط تیمی در شرکت‌های بزرگ
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Image
            src="/images/talk-basalam.png"
            quality="100"
            alt="باسلام"
            className="text-transparent"
            width={125}
            height={82}
          />
          <Image
            src="/images/talk-quera.png"
            quality="100"
            alt="کوئرا"
            className="text-transparent"
            width={95}
            height={82}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-9 self-stretch">
          {Speakers.map((speaker, index) => (
            <Speaker key={index} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Speaker = ({ photo, name, position, companyName, links }: speaker) => (
  <div className="flex w-full max-w-[430px] items-center gap-4 rounded-3xl bg-gray-800 p-4 sm:gap-8 sm:p-8">
    <figure className="h-24 w-24 shrink-0 sm:h-32 sm:w-32">
      <Image
        src={photo}
        objectFit="contain"
        width={128}
        height={128}
        alt={name}
        className="rounded-2xl bg-slate-200 text-transparent"
      />
    </figure>
    <div className="flex min-w-0 flex-col gap-3">
      <strong className="w-full truncate text-lg font-black text-white md:text-xl">{name}</strong>
      <span className="w-full truncate text-white">
        {position} در {companyName}
      </span>
      {links && <Links links={links} />}
    </div>
  </div>
);

const Links: React.FC<{
  links: socialMediaLinks;
}> = ({ links }) => {
  return (
    <div className="flex items-center gap-6" onClick={(e) => e.stopPropagation()}>
      {Object.keys(links).map((key) => {
        const link = links[key as keyof socialMediaLinks];
        const icon = socialMediaIcons[key as keyof typeof socialMediaIcons];

        return (
          <a key={key} href={link} target="_blank" rel="noreferrer">
            <i
              className={`${icon} transi block text-2xl leading-none text-gray-400 transition-colors hover:text-gray-200 lg:text-base`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Talk;
