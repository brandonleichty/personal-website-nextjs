import Switch from "../components/Switch";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Navigation() {
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
        <Switch className="theme-switch" />
      </nav>
      <MobileNav />
    </>
  );
}

export default Navigation;
