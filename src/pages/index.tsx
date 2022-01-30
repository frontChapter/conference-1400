import Head from "next/head";
import Jumbotron from "components/Jumbotron";
import Speakers from "components/Speakers";
import Sponsors from "components/Sponsors";
import TopNavbar from "components/TopNavbar";
import TripSteps from "components/TripSteps";
import Countdown from "components/Countdown";
import Subscribe from "components/Subscribe";

export default function Home() {
  return (
    <main className="content min-h-screen bg-gray-50 pt-[72px]">
      <Head>
        <title>همایش فرانت‌اند ۱۴۰۰ | فرانت چپتر</title>
      </Head>
      <TopNavbar />
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-[40px] border-gray-200"></div>
        <div className="absolute bottom-0 right-0 mr-16 h-80 w-80 translate-x-1/2 -translate-y-16 rounded-full border-[20px] border-gray-100"></div>
        <Jumbotron />
        <Countdown />
      </div>
      <div className="bg-white">
        <Speakers />
      </div>
      <TripSteps />
      <div className="container">
        <Sponsors />
      </div>
      <div className="container">
        <Subscribe />
      </div>
    </main>
  );
}
