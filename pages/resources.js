import React from "react";
import Head from "next/head";

export default function Resources() {
  return (
    <>
      <Head>
        <title>Brandon Leichty</title>
      </Head>
      <main>
        <div className="heading resources">
          <h1>Resources</h1>
          <div className="max-w-4xl mx-auto grid-container grid grid-flow-row grid-cols-1 sm:grid-cols-1 gap-24 gap-y-16 text-center">
        <div className="resource-section-heading">
          <h3 className="mb-8 mt-16 text-4xl font-medium text-purple dark:text-baby-blue">Tutorial Sites</h3>
          <ul className="space-y-6 dark:text-favWhite">
            <li><a href="https://www.leveluptutorials.com" target="_blank" rel="noopener noreferrer">LevelUp Tutorials</a></li>
            <li><a href="https://wesbos.com" target="_blank" rel="noopener noreferrer">Wes Bos</a></li>
            <li><a href="https://frontendmasters.com" target="_blank" rel="noopener noreferrer">FrontendMasters</a></li>
            <li><a href="https://teamtreehouse.com" target="_blank" rel="noopener noreferrer">Treehouse</a></li>
            <li><a href="https://watchandcode.com" target="_blank" rel="noopener noreferrer">Watch and Code</a></li>
            <li><a href="https://egghead.io" target="_blank" rel="noopener noreferrer">egghead.io</a></li>
          </ul>
        </div>
        <div className="resource-section-heading">
          <h3 className="mb-8 mt-16 text-4xl font-medium text-purple dark:text-baby-blue">YouTube Channels</h3>
          <ul className="space-y-6 dark:text-favWhite">
            <li><a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA" target="_blank" rel="noopener noreferrer">fireship.io</a></li>
            <li><a href="https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw" target="_blank" rel="noopener noreferrer">WebDev Simplified</a></li>
            <li><a href="https://www.youtube.com/user/TechGuyWeb" target="_blank" rel="noopener noreferrer">Travesty Media</a></li>
            <li><a href="https://www.youtube.com/channel/UCmXVXfidLZQkppLPaATcHag" target="_blank" rel="noopener noreferrer">Better Dev</a></li>
            <li><a href="https://www.youtube.com/user/99baddawg" target="_blank" rel="noopener noreferrer">Ben Awad</a></li>
            <li><a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q" target="_blank" rel="noopener noreferrer">Dev Ed</a></li>
          </ul>
        </div>
        <div className="resource-section-heading">
          <h3 className="mb-8 mt-16 text-4xl font-medium text-purple dark:text-baby-blue">Other Resources</h3>
          <ul className="space-y-6 dark:text-favWhite">
            <li><a href="https://www.meetup.com/JavaScriptMN/" target="_blank" rel="noopener noreferrer">JavaScript MN Meetup</a></li>
            <li><a href="https://javascriptweekly.com" target="_blank" rel="noopener noreferrer">JavaScript Weekly</a></li>
            <li><a href="https://www.masterywithsql.com" target="_blank" rel="noopener noreferrer">Mastery with SQL</a></li>
            <li><a href="https://weibenfalk.teachable.com/p/react-create-a-movie-app" target="_blank" rel="noopener noreferrer">Weibenfalk's<br/>React Fundamentals</a></li>
            <li><a href="https://www.joshwcomeau.com" target="_blank" rel="noopener noreferrer">Josh Comeau</a></li>
            <li><a href="https://syntax.fm" target="_blank" rel="noopener noreferrer">syntax.fm</a></li>
            <li><a href="https://whatthefuck.is" target="_blank" rel="noopener noreferrer">WTF.is</a></li>
          </ul>
        </div>
        <div className="resource-section-heading">
          <h3 className="mb-8 mt-16 text-4xl font-medium text-purple dark:text-baby-blue">Books</h3>
          <ul className="space-y-6 dark:text-favWhite">
            <li><a href="https://eloquentjavascript.net" target="_blank" rel="noopener noreferrer">Eloquent JavaScript</a></li>
            <li><a href="https://github.com/getify/You-Dont-Know-JS" target="_blank" rel="noopener noreferrer">You Don't Know JS</a></li>
            <li><a href="https://nostarch.com/oojs" target="_blank" rel="noopener noreferrer">The Principles of<br/>Object-Oriented JavaScript</a></li>
            <li><a href="https://nostarch.com/ecmascript6" target="_blank" rel="noopener noreferrer">Understanding ECMAScript 6</a></li>
            <li><a href="https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052" target="_blank" rel="noopener noreferrer">The Pragmatic Programmer</a></li>
            <li><a href="https://www.amazon.com/Think-Like-Programmer-Introduction-Creative/dp/1593274246" target="_blank" rel="noopener noreferrer">Think Like a Programmer</a></li>
            <li><a href="https://www.amazon.com/Simplifying-JavaScript-Writing-Modern-Beyond/dp/1680502883" target="_blank" rel="noopener noreferrer">Simplifying JavaScript</a></li>
            <li><a href="https://www.amazon.com/Effective-JavaScript-Specific-Software-Development/dp/0321812182" target="_blank" rel="noopener noreferrer">Effective JavaScript</a></li>
            <li><a href="https://www.amazon.com/Rediscovering-JavaScript-Master-ES6-ES7/dp/1680505467" target="_blank" rel="noopener noreferrer">Rediscovering JavaScript</a></li>
            <li><a href="https://www.joshwcomeau.com/effective-portfolio/" target="_blank" rel="noopener noreferrer">Building an Effective Dev Portfolio</a></li>
          </ul>
        </div>
        <div className="resource-section-heading">
          <h3 className="mb-8 mt-16 text-4xl font-medium text-purple dark:text-baby-blue">Apps & Tools</h3>
          <ul className="space-y-6 dark:text-favWhite">      
            <li><a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">VSCode</a></li>
            <li><a href="https://tableplus.com" target="_blank" rel="noopener noreferrer">Table Plus</a></li>
            <li><a href="https://insomnia.rest" target="_blank" rel="noopener noreferrer">Insomnia</a></li>
            <li><a href="https://runjs.app" target="_blank" rel="noopener noreferrer">RunJS</a></li>
            <li><a href="https://www.sketch.com" target="_blank" rel="noopener noreferrer">Sketch</a></li>
            <li><a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">Figma</a></li>
          </ul>
        </div>
        <div className="resource-section-heading">
          <h3 className="mb-8 mt-16 text-4xl font-medium text-purple dark:text-baby-blue">Design Inspiration</h3>
          <ul className="space-y-6 dark:text-favWhite">
            <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribble</a></li>
            <li><a href="https://klim.co.nz" target="_blank" rel="noopener noreferrer">Klim Type Foundry</a></li>
            <li><a href="https://www.awwwards.com" target="_blank" rel="noopener noreferrer">Awwwards</a></li>
          </ul>
        </div>
      </div>
    </div>
      </main>
    </>
  );
}
