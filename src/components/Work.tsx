import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "SmartDoc AI",
    category: "Generative AI & RAG Assistant",
    description:
      "Generative AI-powered document summarization and Q&A assistant with LangChain, FAISS vector search, Groq API (LLaMA 3.1 70B), and exact page-level source citations.",
    tools: "Python, LangChain, FAISS, Groq API, Streamlit, Sentence-Transformers",
    image: "/images/smartdoc.jpg",
    link: "https://github.com/arpanmalik727",
  },
  {
    title: "RailRakshak AI",
    category: "Computer Vision & Defect Detection",
    description:
      "AI-powered railway infrastructure inspection prototype that analyzes imagery/video for defect classification, severity scoring, and predictive maintenance.",
    tools: "Python, YOLO, OpenCV, FastAPI, React, PostgreSQL, Docker",
    image: "/images/railrakshak.jpg",
    link: "https://github.com/arpanmalik727",
  },
  {
    title: "DevFlow AI",
    category: "AI Developer Assistant & RAG",
    description:
      "Developer productivity platform for codebase reasoning, natural language queries, semantic code search, and automated documentation generation.",
    tools: "Next.js, TypeScript, Python, FastAPI, PostgreSQL, LLM, RAG",
    image: "/images/devflow.jpg",
    link: "https://github.com/arpanmalik727",
  },
  {
    title: "AlgoTrack",
    category: "DSA Interactive Visualizer",
    description:
      "Interactive platform for visualizing algorithms and data structures including sorting, searching, trees, and graphs with time-complexity analysis.",
    tools: "React, TypeScript, Node.js, PostgreSQL",
    image: "/images/algotrack.jpg",
    link: "https://github.com/arpanmalik727",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "10px", color: "#ccc", fontSize: "14px", lineHeight: "1.4" }}>
                  {project.description}
                </p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
