import { useRef } from "react";
import "./gallery.scss";
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

const Gallery = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="gallery"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="Gallery">
                <motion.div className="Container">
                    <motion.div className="titleContainer" variants={variants}>
                        <div className="title">
                            <img src="/gall5.jpg" alt="" />
                            <h1>
                                <motion.b whileHover={{ color: "#615CF2" }}>Наши</motion.b>
                            </h1>
                        </div>
                        <div className="title">
                            <h1>
                                работы
                            </h1>
                            <a href="#Contact">
                                <button >Что мы делали?</button>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="galleryContainer" variants={variants}>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall7.jpg)"}}/>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall2.jpg)"}}/>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall4.jpg)"}}/>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall5.jpg)"}}/>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall3.jpg)"}}/>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall1.jpg)"}}/>
                    <div className="gallery__img" style={{backgroundImage: "url(/gallery/gall6.jpg)"}}/>
                </motion.div>




            </motion.div>
        </motion.div>

    );
};

export default Gallery;
