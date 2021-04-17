import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="navigation-wrapper">
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
    </nav>
  );
}

export default Navigation;