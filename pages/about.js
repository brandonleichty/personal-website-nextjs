import React from "react";
import Head from "next/head";
import Image from "next/image";
import AboutMeButton from "../components/AboutMeButton";
import { yearsBetween } from "../utilities/yearsBetween"
import { useState } from "react";
import {APPLE_HIRE_DATE, WEB_DEV_JOURNEY_START_DATE} from '../variables/constants'

export default function About() {
  const [longStory, setLongStory] = useState(true);

  return (
    <>
      <Head>
        <title>Brandon Leichty</title>
      </Head>
      <main className="max-w-3xl mx-auto font-medium">
        <div className="heading about">
          <h1>About Brandon</h1>
          <AboutMeButton longStory={longStory} setLongStory={setLongStory} />
          <section className="about-me-text sm:text-xl">
            {longStory ? (
              <>
                <p>
                  In 1998 The Legend of Zelda: Ocarina of Time was released.
                </p>

                <p>I was eleven.</p>

                <p>
                  And that game is what started me down the path of computer
                  programming. I wanted to learn how to create games (like
                  Zelda) using a computer. I’ve dabbled in many languages since
                  a young age, such as C, C++, and Cocoa. And though those
                  languages were (and are) cool, there was an artistic side of
                  me that wanted to create things that worked outside the
                  command line.
                </p>

                <p>
                  If we fast forward to the current year, I’ve now been working
                  for Apple {yearsBetween(APPLE_HIRE_DATE)} years — and have spent the last {yearsBetween(WEB_DEV_JOURNEY_START_DATE)} years
                  learning JavaScript. In 2019 I completed a full stack
                  JavaScript Techdegree through a company called Treehouse —
                  where I learned things such as React, NodeJS, AngularJS,
                  Express, Firebase, MongoDB, and more.
                </p>
                <p>
                  I'm currently on a UI Engineer at Apple where I work primarily with Vue.
                </p>
                <p>
                  Hiring?{" "}
                  <em className="highlight">
                    Send me a text or shoot me an email!
                  </em>
                </p>
              </>
            ) : (
              <>
                <p>
                  I'm a full-stack JavaScript developer, long time Apple
                  employee, and Minnesota native. I'm currently a UI Engineer at Apple—where I work primarly with Vue.
                </p>
              </>
            )}
          </section>
          <div className="aboutme-image-wrapper">
            <div className="aboutme-image">
              <Image
                src="/images/brandon-salt-flats.jpg"
                alt="Picture of Brandon standing on the salt flats"
                width={728}
                height={546}
                priority
                className="hero-img rounded-xl"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
