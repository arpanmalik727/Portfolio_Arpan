import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Learning
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & GenAI Intern</h4>
                <h5>Ybi Foundation (ID: GO1QEE5IE1SS8)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed 6-week AI/GenAI internship mentored by Dr. Alok Yadav.
              Engineered SmartDoc AI — a production-grade RAG document assistant
              using LangChain, FAISS, Sentence-Transformers, Groq API (LLaMA 3.1 70B),
              and Streamlit with Map-Reduce summarization and source citations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack & AI Builder</h4>
                <h5>Academic & Portfolio Projects</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed scalable applications including RailRakshak AI
              (Computer Vision railway defect detector) and DevFlow AI
              (AI-powered repository understanding assistant with RAG).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA & Core CS Focus</h4>
                <h5>Problem Solving & Foundations</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Focused on Data Structures, Algorithms, problem solving on LeetCode,
              Object-Oriented Programming, and scalable database design.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Uttaranchal University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Began Bachelor of Technology in Computer Science & Engineering
              at Uttaranchal University, Dehradun (Current CGPA: 7.8).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software & AI Engineer</h4>
                <h5>Seeking New Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively seeking Software Engineer, SDE Intern, Backend, or AI/ML
              Engineer roles to build scalable and intelligent software products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
