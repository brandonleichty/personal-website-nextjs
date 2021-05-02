import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>Brandon Leichty</title>
      </Head>
      <main className="max-w-3xl mx-auto font-medium">
        <div className="heading about">
          <h1>About Brandon</h1>
          <section className="text-lg sm:text-xl">
            <h3 className="mb-8 mt-10 text-4xl font-bold text-purple dark:text-baby-blue">
              Long story short...
            </h3>
            <p>
              I'm a web developer, long time Apple employee, and Minnesota born and raised.
              My current favorite tech stack is Next.js, GraphQL (with Apollo), and Postgres.
              Hiring? Send me a text or shoot me an email!
            </p>
            <h3 className="mb-8 mt-16 text-4xl font-bold text-purple dark:text-baby-blue">
              Short story long...
            </h3>
            <p>In 1998 The Legend of Zelda: Ocarina of Time was released.</p>

            <p>I was eleven.</p>

            <p>
              And that game is what started me down the path of computer
              programming. I wanted to learn how to create games (like Zelda)
              using a computer. I’ve dabbled in many languages since a young
              age, such as C, C++, and Cocoa. And though those languages were
              (and are) cool, there was an artistic side of me that wanted to
              create things that worked outside the command line.
            </p>

            <p>
              If we fast forward to the current year, I’ve now been working for
              Apple over 11 years — and have spent the last four years learning
              JavaScript. In 2019 I completed a full stack JavaScript Techdegree
              through a company called Treehouse — where I learned things such
              as React, NodeJS, AngularJS, Express, Firebase, MongoDB, and more.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
