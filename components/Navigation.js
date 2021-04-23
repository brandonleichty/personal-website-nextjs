import Switch from "../components/Switch";
import Link from "next/link";
import {useState} from "react";
import Burger from '@animated-burgers/burger-squeeze' 
import '@animated-burgers/burger-squeeze/dist/styles.css' 

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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
            <Link href="/uses">
              <a>Uses</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
        <Switch className="theme-switch"/>
      </nav>
      <nav className="burger-nav-wrapper navigation-wrapper inline-flex sm:hidden">
        <Burger isOpen={ isOpen } Component="button" type="button" onClick={()=>setIsOpen(!isOpen)} />
      </nav>
    </>
  );
}

export default Navigation;
