import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Head>
        <title>Brandon Leichty</title>

      </Head>
      <main>
        <section>
        <div className="heading landing">
          <div>
            <div className="hero-image-wrapper">
              <img src="images/brandon.png" className="rounded-full	border-white border-solid w-60 h-60"></img>
            </div>
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
        </section>
      </main>
    </>
  );
}