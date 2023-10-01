const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <div className="work-entry">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/2560px-Intel_logo_2023.svg.png"
          alt="Intel Logo"
          style={{ width: "60px", height: "30px", marginTop: "2rem" }}
        />
        <h3>CPU Validation Engineer</h3>
        <p>Aug 2021 - Present</p>
        <ul className="bullet-list">
          <li>
            Analyzed system-level diagnostic failures for both hardware and
            software and support team achieve 99% pass rate.
          </li>
          <li>
            Perform analysis on test results and write a detailed report to
            contribute insight into technical problems and possible solutions.
          </li>
          <li>
            Develop debug scripts to enhance the validation process,
            facilitating quicker and more accurate detection of problems.
          </li>
          <li>Tracked process validation schedules and projects.</li>
          {/* Add more responsibilities or achievements */}
        </ul>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Intel_logo_2023.svg/2560px-Intel_logo_2023.svg.png"
          alt="Intel Logo"
          style={{ width: "60px", height: "30px", marginTop: "2rem" }}
        />
        <h4>System Validation Engineering Intern</h4>
        <p>Aug 2020 - May 2021</p>
        <ul className="bullet-list">
          <li>
            Developed a CLI version of Lane Margining tool in python which
            allows users to run SSD validations that test the quality,
            reliability, compatibility and data integrity of drives.
          </li>
          <li>
            Designed comprehensive testing plans aimed at validating the drive's
            quality, reliability, compatibility, and data integrity.
          </li>
          <li>
            Collaborated closely with the team to improve the core codebase of
            the Lane Margining tool, enhancing its features and optimizing
            performance.
          </li>
          <li>
            Wokrked with cross-functional teams to gather feedback and insights,
            driving iterative improvements to the Lane Margining tool.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkExperience;
