import Head from "next/head";
import HomePage from "../components/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <HomePage />
      </div>
    </>
  );
}
