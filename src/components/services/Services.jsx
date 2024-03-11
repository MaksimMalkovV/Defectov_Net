import { useRef } from "react";
import "./services.scss";
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

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Мы заботимся об авто наших клиентов
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/polir.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "#F20519" }}>Лучшее</motion.b> решение
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#615CF2" }}>Для Вашего</motion.b> авто.
          </h1>
          <a href="#Contact">
            <button >Что мы делаем?</button>
          </a>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <div
          className="box"
        >
            <img src="/polishing.jpg" />
            <h2>Полировка авто</h2>
        </div>
        <motion.div
          className="box"
        >
          <img src="/wax.jpg" />
          <h2>Покрытия для авто</h2>
        </motion.div>
        <motion.div
          className="box"
        >
          <img src="/glass_polishing.jpg" />
          <h2>Полировка стекл</h2>
        </motion.div>
        <motion.div
          className="box"
        >
          <img src="/preparation.jpg" />
          <h2>Предпродажная подготовка</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
