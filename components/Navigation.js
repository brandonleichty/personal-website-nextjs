import Switch from "../components/Switch";
import AudioToggle from '../components/AudioToggle'
import Link from "next/link";
import MobileNav from "./MobileNav";
import {useState} from 'react'

function Navigation() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <>
      <nav className="navigation-wrapper hidden sm:inline-flex">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/uses">
              <a>Uses</a>
            </Link>
          </li>
        </ul>
        <Switch className="theme-switch" isMuted={isMuted}/>
        <AudioToggle className="audio-toggle" setIsMuted={setIsMuted} isMuted={isMuted}/>
      </nav>
      <MobileNav setIsMuted={setIsMuted} isMuted={isMuted}/>
    </>
  );
}

export default Navigation;
