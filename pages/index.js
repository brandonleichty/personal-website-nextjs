import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brandon Leichty</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }`,
          }}
        />
      </Head>
      <main>
        <div className="heading landing">
          <div>
            <h1>Brandon Leichty</h1>
            <p className="main-subheading">
              Full Stack JavaScript developer and<br/>designer from Minneapolis, MN.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
