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
              Full Stack JavaScript developer and<br/><span><a href="https://www.youtube.com/watch?v=jAaxVuz0uKk" target="_blank" rel="noopener noreferrer">designer</a></span> from Minneapolis, MN.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
