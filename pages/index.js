import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Brandon Leichty</title>

      </Head>
      <main>
        <div className="heading landing">
          <div>
            <h1>Brandon Leichty</h1>
            <p className="main-subheading">
              Full Stack JavaScript developer and{" "}
              <span>
                <a
                  href="https://www.youtube.com/watch?v=jAaxVuz0uKk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  designer
                </a>
              </span>{" "}
              from Minneapolis, MN.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
