import Head from "next/head";
import { TopNavbar } from "../components/TopNavbar";

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
      </div>
    </main>
  );
}
