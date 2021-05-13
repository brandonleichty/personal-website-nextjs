import Switch from "../components/Switch";
import AudioToggle from "../components/AudioToggle";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <nav className="navigation-wrapper hidden sm:inline-flex">
        <ul>
          <li>
            <Link href="/">
              <a className={`${router.asPath == "/" ? "active-link" : ""}`}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                className={`${router.asPath == "/about" ? "active-link" : ""}`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <a
                className={`${
                  router.asPath == "/resources" ? "active-link" : ""
                }`}
              >
                Resources
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a
                className={`${
                  router.asPath == "/projects" ? "active-link" : ""
                }`}
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/uses">
              <a className={`${router.asPath == "/uses" ? "active-link" : ""}`}>
                Uses
              </a>
            </Link>
          </li>
        </ul>
        <Switch className="theme-switch" isMuted={isMuted} />
        <AudioToggle
          className="audio-toggle"
          setIsMuted={setIsMuted}
          isMuted={isMuted}
        />
      </nav>
      <MobileNav setIsMuted={setIsMuted} isMuted={isMuted} />
    </>
  );
}

export default Navigation;
