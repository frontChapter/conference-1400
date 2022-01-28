import Head from "next/head";
import { TopNavbar } from "../components/TopNavbar";

export default function Home() {
  return (
    <main className="content min-h-screen bg-gray-50 pt-[72px]">
      <Head>
        <title>همایش فرانت‌اند ۱۴۰۰ | فرانت چپتر</title>
      </Head>
      <TopNavbar />
    </main>
  );
}
