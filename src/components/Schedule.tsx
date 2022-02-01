import {
  item,
  links,
  itemsData,
  planIcons,
  socialMediaIcons,
} from "data/schedule-data";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRef, useState } from "react";
import Image from "next/image";

const Schedule: React.FC<{}> = () => {
  return (
    <div className="bg-[#eef9ef] py-12 md:py-8">
      <div className="container">
        <h2 className="text-center text-2rem font-black text-secondary">
          برنامه همایش
        </h2>
        <Items />
      </div>
    </div>
  );
};

const Items: React.FC<{}> = () => {
  const itemsLength = itemsData.length;

  return (
    <div className="relative my-12 overflow-hidden">
      <div className="absolute top-7 right-[91px] z-10 hidden h-[200vh] border-l-2 border-dashed border-secondary md:block"></div>
      <div className="items relative space-y-6">
        {itemsData.map((item, index) => (
          <Item key={index} data={item} lastItem={index + 1 === itemsLength} />
        ))}
      </div>
    </div>
  );
};

const Item: React.FC<{
  data: item;
  lastItem: boolean;
}> = ({ data: item, lastItem }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const divider = (
    <div className="mx-4 hidden h-6 border-l-2 border-gray-200 md:block"></div>
  );

  return (
    <div className="relative flex flex-nowrap items-start">
      {/* Right side */}
      <div className="ml-6 hidden w-28 shrink-0 items-center justify-end pt-[10px] md:flex">
        <div className="leading-2rem ml-3 text-left text-2xl font-medium text-secondary">
          {digitsEnToFa(item.time)}
        </div>
        <i
          className={`${planIcons.management} z-30 block rounded-full bg-secondary p-3 leading-none text-white`}
        ></i>

        {/* Cover last item dotted line to hide */}
        {lastItem && (
          <div className="absolute top-7 right-[91px] z-20 h-full border-l-2 border-[#eef9ef]"></div>
        )}
      </div>

      {/* Left side */}
      <div
        className={
          "grow rounded-2xl bg-white py-4 px-6" +
          (item.expandable ? " cursor-pointer" : "")
        }
        onClick={() => {
          if (item.expandable) {
            setExpanded(!expanded);
          }
        }}
      >
        {/* Header */}
        <div className="flex grow flex-wrap items-center">
          <div
            className={
              "md:order-1 " +
              (item.expandable ? "order-4 w-10/12 md:w-auto" : "order-1")
            }
          >
            <div className="text-lg font-medium text-gray-600">
              {item.title}
            </div>
          </div>

          {/* Time & Icon */}
          <div
            className={
              "order-2 mr-auto flex pr-2 md:hidden" +
              (item.expandable ? " mb-4" : "")
            }
          >
            <div className="ml-2 text-left text-lg font-medium text-secondary">
              {digitsEnToFa(item.time)}
            </div>
            <i
              className={`${planIcons.management} block rounded-full bg-secondary p-2 text-xs leading-none
                 text-white`}
            ></i>
          </div>

          <div className="order-3 w-full md:hidden"></div>

          {/* Speaker */}
          {item.speaker && (
            <div className="order-1 mb-4 flex md:order-2 md:mb-0">
              {divider}
              <div className="h-8 w-8">
                <Image src={item.speaker.avatar} alt={item.speaker.name} />
              </div>
              <div className="mr-2 text-lg text-gray-500">
                {item.speaker.name}
              </div>
            </div>
          )}

          {/* Links */}
          {item.speaker?.links && (
            <div className="hidden md:order-3 md:flex">
              {divider}
              <div className="hidden md:block">
                <Links links={item.speaker.links} />
              </div>
            </div>
          )}

          {/* Expand arrow */}
          {item.expandable && (
            <div className="order-4 mr-auto shrink-0">
              <i
                className={
                  "ri-arrow-down-s-line block leading-none text-gray-600 transition-transform duration-500" +
                  (expanded ? " rotate-180" : "")
                }
              ></i>
            </div>
          )}
        </div>

        {/* Content */}
        {item.expandable && item.content && (
          <div
            className="collapse duration-500"
            style={{
              maxHeight: expanded ? contentRef.current?.clientHeight : 0,
            }}
          >
            <div className="pt-4 md:pt-3" ref={contentRef}>
              <div className="flex items-start justify-between border-t-2 border-gray-200 pt-4 md:border-t-0 md:pt-0">
                <div className="text-gray-500">{item.content}</div>
                {item.speaker?.links && (
                  <div className="mr-2 md:hidden">
                    <Links links={item.speaker.links} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Links: React.FC<{
  links: links;
}> = ({ links }) => {
  return (
    <div
      className="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0 md:space-x-reverse"
      onClick={(e) => e.stopPropagation()}
    >
      {Object.keys(links).map((key) => {
        const link = links[key as keyof links];
        const icon = socialMediaIcons[key as keyof typeof socialMediaIcons];

        return (
          <a key={key} href={link} target="_blank" rel="noreferrer">
            <i
              className={`${icon} transi block text-xl leading-none text-gray-400 transition-colors hover:text-secondary`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Schedule;
