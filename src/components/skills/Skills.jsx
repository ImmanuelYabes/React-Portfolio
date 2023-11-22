import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Im focused on helping your company grow
          <br /> While keep learning
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            What <motion.b whileHover={{ color: "orange" }}>SKILLS</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            Do I <motion.b whileHover={{ color: "orange" }}>HAVE ?</motion.b>{" "}
          </h1>
          <button>LIST OF MY SKILLS</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-End</h2>
          <p>
            "I am proficient in HTML, CSS, and JavaScript, with specialized
            expertise in ReactJS and other frameworks. Skilled in crafting
            visually appealing, responsive web interfaces and translating design
            concepts into intuitive user experiences, I excel in building
            dynamic and efficient web applications."
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Machine Learning</h2>
          <p>
            I specialize in machine learning, particularly in computer vision
            and deep learning. I excel in implementing advanced algorithms for
            image recognition, object detection, and classification.
            Additionally, I have expertise in diverse machine learning
            applications such as natural language processing, predictive
            modeling.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skills Certification</h2>
          <p>
            I'm certified in basic project management and SQL, showcased on
            GitHub. I excel in organizing projects, leading teams, and managing
            timelines. Additionally, my SQL expertise enables efficient database
            handling and insightful data querying for informed decision-making.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
