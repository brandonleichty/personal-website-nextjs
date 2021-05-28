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
                <div className="hero-image grow">
                  <Image
                    src="/images/brandon-transparent.png"
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    priority
                    className="hero-img rounded-full border-white border-solid w-48 h-48 sm:w-60 sm:h-60"
                  />
                </div>
              </div>
              <h1>Brandon Leichty</h1>
              <p className="main-subheading">
                Full Stack JavaScript developer from Minneapolis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
