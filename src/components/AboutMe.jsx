import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";

export const AboutMe = ({ setFocus }) => {
  const [elementRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setFocus((oldFocus) => ({ ...oldFocus, about: isVisible }));
  }, [isVisible]);

  return (
    <div
      ref={elementRef}
      className="min-h-screen flex justify-center flex-wrap content-center"
    >
      <motion.div
        className="bg-white w-11/12 lg:w-10/12 m-auto p-5 sm:p-10 mt-5 rounded-xl flex flex-col lg:flex-row text-center lg:text-left min-h-[520px]"
        initial={{ scale: 0 }}
        whileInView={{
          rotate: 360,
          scale: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        viewport={{ once: true }}
      >
        <div className="flex-1 m-auto text-center">
          <img src="/logo192.png" className="inline-block m-auto text-center" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center content-center items-center">
            <h2 className="text-center text-2xl sm:text-4xl font-bold mb-3">
              &lt; Sobre mí /&gt;
            </h2>
            <p className="text-justify text-lg sm:text-2xl font-semibold">
              Ingeniero en Tecnología de la Informática recientemente graduado
              con una pasión inquebrantable por la programación, especialmente
              en el campo del desarrollo web. Con experiencia práctica en el
              desarrollo y diseño de sitios web, he adquirido una sólida
              comprensión de diversas tecnologías y metodologías para la
              creación de productos digitales de alta calidad.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
