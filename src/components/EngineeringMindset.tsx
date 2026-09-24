import {
  FaCode,
  FaServer,
  FaBolt,
  FaNetworkWired,
  FaDatabase,
  FaShieldAlt,
  FaVial,
  FaCodeBranch,
  FaLayerGroup,
} from "react-icons/fa";
import "./styles/EngineeringMindset.css";

const mindsetItems = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Readable, maintainable and efficient code adhering to solid design principles.",
  },
  {
    icon: <FaServer />,
    title: "Scalable Architecture",
    desc: "Building decoupled, extensible systems engineered to scale with growing users.",
  },
  {
    icon: <FaBolt />,
    title: "Performance",
    desc: "Optimized execution, fast latency, efficient memory, and responsive UI.",
  },
  {
    icon: <FaNetworkWired />,
    title: "API Design",
    desc: "Well-structured, documented REST APIs with clear contracts and robust error handling.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Efficient and normalized data models with optimized query indexes.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    desc: "Safe architectures, sanitized inputs, and privacy-first data handling.",
  },
  {
    icon: <FaVial />,
    title: "Testing & Reliability",
    desc: "Thorough validation and test cases ensuring resilient, bug-free applications.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Version Control",
    desc: "Collaborative, organized Git workflows with disciplined branching and CI/CD.",
  },
  {
    icon: <FaLayerGroup />,
    title: "System Design",
    desc: "Designing for high availability, fault tolerance, and long-term maintainability.",
  },
];

const EngineeringMindset = () => {
  return (
    <div className="mindset-section section-container" id="mindset">
      <div className="mindset-container">
        <div className="mindset-header">
          <h2>
            Engineering <span>Mindset</span>
          </h2>
          <p className="mindset-sub">
            Core technical philosophies and engineering principles guiding my development process.
          </p>
        </div>

        <div className="mindset-grid">
          {mindsetItems.map((item, index) => (
            <div className="mindset-card" key={index}>
              <div className="mindset-icon-wrap">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mindset-quote-box">
          <div className="mindset-quote-tag">CAREER OBJECTIVE</div>
          <p className="mindset-quote">
            "Seeking opportunities to apply strong programming fundamentals and software
            engineering skills through Software Engineer, SDE Intern, Full-Stack Developer,
            Backend Developer, or AI/ML Engineer roles while building scalable and intelligent
            software products."
          </p>
          <div className="mindset-motto">Build • Learn • Grow</div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringMindset;
