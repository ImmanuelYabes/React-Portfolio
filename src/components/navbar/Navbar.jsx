import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/immanuel.yabes"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/yabesalit21/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a
            href="https://github.com/ImmanuelYabes"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/immanuel-yabes-592b65241/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedln.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
