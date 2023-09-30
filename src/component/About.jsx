import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me 😁</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            I'm a passionate software development engineer with a curiosity for
            all things tech. I'm passionate about solving complex tech puzzles
            and thrive in the ever-changing world of software development. When
            I'm not in front of my computer, you can find me planning my next
            adventure, whether it's exploring vibrant cities or simply enjoying
            the serenity of nature. I believe that just as software development
            is about problem-solving, traveling is about exploring the beauty
            and diversity of our world.
          </p>
          <p>
            So, whether I'm writing code or wandering through new landscapes, my
            enthusiasm for learning, creating, and discovering remains at the
            core of who I am. I'm excited to continue my journey in software
            development engineering while weaving in the stories and experiences
            I gather from my travels along the way.
          </p>
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
