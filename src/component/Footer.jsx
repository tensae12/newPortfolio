//import Font Awesome styles and icons once font-awwesome installed(npm install --save font-awesome)
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Tensae's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://github.com/tensae12"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="http://www.linkedin.com/in/tensae-kebede/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
