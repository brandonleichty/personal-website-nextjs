import Head from "next/head";
import Image from "next/image";
import confetti from 'canvas-confetti';



export default function Home() {

  const shootConfetti = () => {
    // const rect = memoji.getBoundingClientRect();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {y: 0.4}
    });
  }
  
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
              <img onClick={() => shootConfetti()} src="images/brandon-min.png" className="rounded-full	border-white border-solid w-48 h-48 sm:w-60 sm:h-60"></img>
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