import React from "react";
import Head from "next/head";

export default function Blog() {
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
          <h1>Blog</h1>
        </div>
      </main>
    </>
  );
}
