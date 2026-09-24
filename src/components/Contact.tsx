import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:arpanmalik@example.com" data-cursor="disable">
                arpanmalik@example.com
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <span>Dehradun, Uttarakhand, India</span>
            </p>
            <h4>University</h4>
            <p>
              <span>Uttaranchal University (B.Tech CSE)</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Profiles & Social</h4>
            <a
              href="https://github.com/arpanmalik727"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/arpan-malik-37aa00383/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/arpan_malik/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Arpan Malik</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 • Build • Learn • Grow
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
