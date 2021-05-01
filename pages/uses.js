import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function Uses() {
  return (
    <>
      <Head>
        <title>Brandon Leichty | Uses</title>
      </Head>
      <main>
        <div className="heading uses">
          <h1>Uses</h1>
        </div>
        <div className="desk-image-wrapper">
          <div className="desk-image">
            <Image
              src="/images/desksetup.jpeg"
              alt="Picture of Brandon's desk setup"
              width={4032}
              height={3024}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </>
  );
}
