const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <div className="work-entry">
        <h3>CPU Validation Engineer</h3>
        <p>Intel</p>
        <p>Santa Clara</p>
        <p>2021 - Present</p>
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
      </div>
      {/* Add more work experience entries */}
    </div>
  );
};

export default WorkExperience;
