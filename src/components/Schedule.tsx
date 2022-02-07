import { item, links, itemsData, planIcons, socialMediaIcons } from "data/schedule-data";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRef, useState } from "react";
import Image from "next/image";

const Schedule: React.FC<{}> = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="schedule" className="bg-[#eef9ef] py-12 md:py-8">
      <div className="container flex flex-col items-center">
        <h2 className="text-center text-2rem font-black text-secondary">برنامه همایش</h2>
        <Items showAll={showAll} />
        <div className="collapse duration-200" style={{ maxHeight: showAll ? 0 : 100 }}>
          <div
            role="button"
            className="mt-6 flex items-center justify-center py-2 text-gray-700 md:mt-8 md:py-0"
            onClick={() => setShowAll(true)}
          >
            <i className="ri-arrow-down-s-line block leading-none md:text-lg" />
            <div className="mx-2 font-bold md:text-base">برنامه کامل</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Items: React.FC<{ showAll: boolean }> = ({ showAll }) => {
  let lastItemIndex = 0;
  itemsData.map((item, index) => {
    if (showAll || item.showByDefault) lastItemIndex = index;
  });

  return (
    <div className="relative mt-3 overflow-hidden md:mt-8">
      <div className="absolute top-7 right-[91px] z-10 hidden h-[200vh] border-l-2 border-dashed border-secondary md:block"></div>
      <div className="items relative">
        {itemsData.map((item, index) => (
          <Item
            key={index}
            data={item}
            lastItem={index === lastItemIndex}
            visible={showAll || !!item.showByDefault}
          />
        ))}
      </div>
    </div>
  );
};

const Item: React.FC<{
  data: item;
  visible: boolean;
  lastItem: boolean;
}> = ({ data: item, visible, lastItem }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const divider = <div className="mx-4 hidden h-6 border-l-2 border-gray-200 md:block"></div>;
  const icon = planIcons[item.type];

  return (
    <div className={"collapse duration-1000 " + (visible ? "collapsed" : "")}>
      <div className="relative flex flex-nowrap items-start py-3">
        {/* Right side */}
        <div className="ml-6 hidden w-28 shrink-0 items-center justify-end pt-[10px] md:flex">
          <div className="leading-2rem ml-3 text-left text-2xl font-medium text-secondary">
            {digitsEnToFa(item.time)}
          </div>
          <i
            className={`${icon} z-30 block rounded-full bg-secondary p-3 leading-none text-white`}
          ></i>

          {/* Cover last item dotted line to hide */}
          {lastItem && (
            <div className="absolute top-7 right-[91px] z-20 h-full border-l-2 border-[#eef9ef]"></div>
          )}
        </div>

        {/* Left side */}
        <div
          className={
            "grow rounded-2xl bg-white py-4 px-6" + (item.expandable ? " cursor-pointer" : "")
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
                "md:order-1 " + (item.expandable ? "order-4 w-10/12 md:w-auto" : "order-1")
              }
            >
              <div className="text-lg font-medium text-gray-600">{item.title}</div>
            </div>

            {/* Time & Icon */}
            <div
              className={"order-2 mr-auto flex pr-2 md:hidden" + (item.expandable ? " mb-4" : "")}
            >
              <div className="ml-2 text-left text-lg font-medium text-secondary">
                {digitsEnToFa(item.time)}
              </div>
              <i
                className={`${icon} block rounded-full bg-secondary p-2 text-xs leading-none text-white`}
              ></i>
            </div>

            <div className="order-3 w-full md:hidden"></div>

            {/* Speaker */}
            {item.speaker && (
              <div className="order-1 mb-4 flex md:order-2 md:mb-0">
                {divider}
                <div className="h-7 w-7">
                  <Image
                    width={128}
                    height={128}
                    className="rounded-full bg-slate-200 text-transparent"
                    src={item.speaker.avatar}
                    alt={item.speaker.name}
                  />
                </div>
                <div className="mr-2 text-lg text-gray-500">{item.speaker.name}</div>
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
                  <div className="whitespace-pre-wrap leading-7 text-gray-500">{item.content}</div>
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
