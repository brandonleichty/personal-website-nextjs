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
              <div className="hero-image-wrapper relative rounded-full mx-auto border-solid w-48 h-48 sm:w-60 sm:h-60">
                {/* <img onClick={() => shootConfetti()} src="images/brandon-min.png" className="rounded-full	border-white border-solid w-48 h-48 sm:w-60 sm:h-60"></img> */}

                <Image
                  src={"/images/brandon-min.png"}
                  alt="Picture of Brandon"
                  priority={true}
                  layout="fill" // required
                  objectFit="cover" // change to suit your needs
                  className="rounded-full" // just an example
                  onClick={() => shootConfetti()}
                />
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
