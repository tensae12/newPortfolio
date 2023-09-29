import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>As a developer....</p>
          <p>Throughout my career ....</p>
        </div>
        <div className="about-img">
          <Image
            src="/abt.jpg"
            className="profile-img"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
