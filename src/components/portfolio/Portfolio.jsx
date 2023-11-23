import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Flutter Project",
    img: "/circle.png",
    desc: "Circle is a Flutter application project hosted on GitHub. It supports multiple platforms and is written in several languages including Dart, C++, and Swift. However, it currently has no description, website, topics, releases, packages, or workflows published by the author. The project has 3 commits and no stars, watchers, or forks yet.",
    link: "https://github.com/ImmanuelYabes/Circle.git",
  },
  {
    id: 2,
    title: "Research Project",
    img: "/icoris1.png",
    desc: "The project hosted on GitHub is aimed at comparing the performance of SVM, ANN, and BERT models for text classification using the RMCS dataset. The dataset comprises reviews of movies, cars, smartphones, and songs. The project includes a Jupyter notebook with code for loading, preprocessing, training, evaluating the models, and visualizing the results.",
    link: "https://github.com/ImmanuelYabes/SVM-ANN-and-BERT-Models-RMCS.git",
  },
  {
    id: 3,
    title: "React Project",
    img: "/react.jpeg",
    desc: "This project is a React-based portfolio website that showcases the developer’s skills and projects. The project uses Vite as a build tool and ESLint as a code linter. The project also features some animations and transitions to make the website more interactive and appealing.",
    link: "https://github.com/ImmanuelYabes/React-Portfolio.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link} target="_blank" rel="noreferrer">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
