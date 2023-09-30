import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/me.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Tensae's personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Tensae 👋🏽 </h1>
        <p>
          I'm a Software & Hardware Engineer based in San Francisco Bay Area.
        </p>
        <div className="social-icons">
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
    </div>
  );
};

export default Hero;
