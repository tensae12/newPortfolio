/*basic navigation bar component for a Next.js application. 
It includes a logo that links to the homepage and a "Resume" button that
should have a valid URL for users to download a resume. 
It's a common practice to style this component using CSS-in-JS solution */

import Link from "next/link"; //this line imports the Link component from the Next.js library.

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Tensae's Portfolio</Link>
      </div>
      <a
        href="https://drive.google.com/file/d/1BdpmSZ-8V05G6SC7x6aSMWpRyUZnycOL/view"
        className="cta-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>
  );
};

export default Navbar;
