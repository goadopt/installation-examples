import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="adopt-website-id"
          content="72113283-af3e-4840-a652-9b166acc3e0a"
        />
        <script
          src={`//tag.goadopt.io/injector.js?website_code=72113283-af3e-4840-a652-9b166acc3e0a`}
          className="adopt-injector"
        ></script>
      </Head>
      <main className="flex h-screen items-center justify-center text-xl">
        AdOpt Preview
      </main>
    </>
  );
}
