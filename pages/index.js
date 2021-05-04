import Head from "next/head";
import Image from "next/image";
import confetti from "canvas-confetti";

export default function Home() {
  const shootConfetti = () => {
    // const rect = memoji.getBoundingClientRect();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.4 },
    });
  };

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
                <div className="hero-image">
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
