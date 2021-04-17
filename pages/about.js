import React from "react";
import Head from "next/head";
import Image from 'next/image'


export default function About() {
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
      <main className="max-w-3xl mx-auto">
        <div className="heading about">
          <h1>About Brandon</h1>
          <section className="text-lg sm:text-xl">
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

            <p>
              One of the reasons I love JavaScript so much is because it’s
              always changing. And learning new things is one of my biggest
              passions. I’m a big reader (50 books in a year is my record) — And
              there’s always something new to learn in the JavaScript/web world.
              Whether it be a new framework, paradigm, or best practice.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
