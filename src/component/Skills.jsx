const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card python">
          <i className="fa-brands fa-python python-icon"></i>
          <p>Python</p>
        </div>

        <div className="skill-card java">
          <i className="fa-brands fa-java java-icon"></i>
          <p>Java</p>
        </div>

        <div className="skill-card ccode">
          <img
            src="/c.png"
            alt="C++ Icon"
            style={{ width: "30px", height: "30px" }}
          />
          <p>C++</p>
        </div>

        <div className="skill-card css">
          <i className="fa-brands fa-css3-alt css-icon"></i>
          <p>CSS</p>
        </div>

        <div className="skill-card asb">
          <img
            src="/asmbly.png"
            alt="Assembly Icon"
            style={{ width: "30px", height: "30px" }}
          />
          <p>x86 Assembly</p>
        </div>

        <div className="skill-card ts">
          <img
            src="/ty.png"
            alt="TypeScript Icon"
            style={{ width: "30px", height: "30px" }}
          />
          <p>TypeScript</p>
        </div>

        <div className="skill-card react">
          <i className="fa-brands fa-react react-icon"></i>
          <p>React</p>
        </div>
        <div className="skill-card docker">
          <i className="fa-brands fa-docker docker-icon"></i>
          <p>Docker</p>
        </div>
        <div className="skill-card kb">
          <img src="/kb.png" alt="Kubernetes Icon" />
          <p>Kubernetes</p>
        </div>

        <div className="skill-card az">
          <img
            src="/az.png"
            alt="Azure Icon"
            style={{ width: "35px", height: "35px" }}
          />
          <p>Azure cloud</p>
        </div>

        <div className="skill-card gg">
          <img
            src="/gg.png"
            alt="google cloud Icon"
            style={{ width: "30px", height: "30px" }}
          />
          <p>Google cloud</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
