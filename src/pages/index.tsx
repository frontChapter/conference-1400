import Head from "next/head";
import { GetStaticProps } from "next";
import getTweets, { Tweet } from "utils/getTweets";
import Jumbotron from "components/Jumbotron";
import About from "components/About";
import Speakers from "components/Speakers";
import Sponsors from "components/Sponsors";
import TopNavbar from "components/TopNavbar";
import TripSteps from "components/TripSteps";
import Countdown from "components/Countdown";
import Subscribe from "components/Subscribe";
import Schedule from "components/Schedule";
import Talk from "components/Talk";
import EventPlace from "components/EventPlace";
import Team from "components/Team";
import Tweets from "components/Tweets";
import Footer from "components/Footer";
import Script from "next/script";

export default function Home({ tweets }: { tweets: false | Tweet[] }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>همایش فرانت‌اند ۱۴۰۰ | فرانت چپتر</title>
      </Head>
      <Script src="/js/yektanet.js" strategy="beforeInteractive" />
      <TopNavbar />
      <main className="pt-[72px]">
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-[40px] border-gray-200"></div>
          <div className="absolute bottom-0 right-0 mr-16 h-80 w-80 translate-x-1/2 -translate-y-16 rounded-full border-[20px] border-gray-100"></div>
          <Jumbotron />
          <Countdown />
        </section>
        <About />
        <Speakers />
        <Schedule />
        <Talk />
        <EventPlace />
        <TripSteps />
        {/* <TripSights /> */}
        <Sponsors />
        <Subscribe />
        <Team />
        <Tweets tweets={tweets} />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      tweets: await getTweets(),
    },
  };
};
