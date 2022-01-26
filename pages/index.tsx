import Head from "next/head";
import { TopNavbar } from "../components/TopNavbar";

export default function Home() {
  return (
    <main className="content bg-gray-50">
      <Head>
        <title>همایش فرانت‌اند ۱۴۰۰ | فرانت چپتر</title>
      </Head>
      <TopNavbar />
    </main>
  );
}
