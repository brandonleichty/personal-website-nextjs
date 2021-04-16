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
        <div className="heading">
          <h1>Brandon Leichty</h1>
        </div>
      </main>
    </>
  );
}
