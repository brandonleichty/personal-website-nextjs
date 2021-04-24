import Link from "next/link";
import Switch from "../components/Switch";
import { useState } from "react";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import AudioToggle from '../components/AudioToggle'

import React from "react";

function MobileNav({isMuted, setIsMuted}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="burger-nav-wrapper navigation-wrapper inline-flex sm:hidden">
      <Burger
        isOpen={isOpen}
        Component="button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="mobile-navigation-wrapper">
        <ul
          className={`text-black dark:text-white ${isOpen ? "active" : null}`}
        >
          <li>
            <Link href="/">
              <a onClick={() => setIsOpen(false)}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={() => setIsOpen(false)}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <a onClick={() => setIsOpen(false)}>Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/uses">
              <a onClick={() => setIsOpen(false)}>Uses</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a onClick={() => setIsOpen(false)}>Blog</a>
            </Link>
          </li>
          <li>
            <div>
            <Switch className="theme-switch" isMuted={isMuted}/>
            <AudioToggle setIsMuted={setIsMuted} isMuted={isMuted}/>
            </div>
          </li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? "active" : null}`} />
    </nav>
  );
}

export default MobileNav;
