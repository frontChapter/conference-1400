import { TeamMember, teamMembers } from "data/team-members";
import Image from "next/image";
import { socialMediaIcons, socialMediaLinks } from "types";

export const Team: React.FC<{}> = () => {
  return (
    <section id="team" className="container py-9 md:py-12 lg:py-16">
      <h3 className="mb-5 text-center text-2xl font-black leading-normal text-primary md:mb-7 md:text-28 lg:mb-9 lg:text-4xl">
        تیم برگزاری
      </h3>
      <div className="flex justify-center">
        <div className="mx-auto flex flex-wrap justify-center gap-x-8 gap-y-8 sm:gap-x-6 sm:gap-y-6 md:gap-y-12 md:gap-x-12 lg:gap-x-20 xl:gap-x-10 xl:gap-y-10 2xl:gap-x-24 2xl:gap-y-14">
          {teamMembers.map((member, index) => (
            <Member key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Member = ({ name, role, photo, links }: TeamMember) => (
  <div className="flex w-52 flex-col items-center gap-y-3 rounded-3xl bg-white py-5 px-3 md:w-56 lg:gap-y-4 lg:py-6">
    <figure className="h-32 w-32">
      <Image
        src={photo}
        objectFit="contain"
        width={128}
        height={128}
        alt={name}
        className="rounded-2xl bg-slate-200 text-transparent transition-all hover:scale-[105%]"
      />
    </figure>
    <strong className="w-full truncate text-center font-bold text-gray-600 md:text-lg">
      {name}
    </strong>
    <span className="w-full  truncate text-center text-sm font-medium text-gray-500 md:text-base">
      {role}
    </span>
    {links && <Links links={links} />}
  </div>
);

const Links: React.FC<{
  links: socialMediaLinks;
}> = ({ links }) => {
  return (
    <div
      className="flex items-center justify-center space-x-6 space-x-reverse"
      onClick={(e) => e.stopPropagation()}
    >
      {Object.keys(links).map((key) => {
        const link = links[key as keyof socialMediaLinks];
        const icon = socialMediaIcons[key as keyof typeof socialMediaIcons];

        return (
          <a key={key} href={link} target="_blank" rel="noreferrer">
            <i
              className={`${icon} block text-2xl leading-none text-gray-400 transition-colors hover:text-gray-500 lg:text-base lg:leading-none`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Team;
