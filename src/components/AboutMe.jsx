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
        className="bg-white w-11/12 lg:w-10/12 m-auto p-5 sm:p-10 mt-5 rounded-xl flex flex-col lg:flex-row text-center lg:text-left min-h-[500px] shadow-md shadow-white"
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
          <img
            src="/img-about-me.JPEG"
            className="inline-block m-auto text-center h-60 md:h-72 lg:h-96 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center content-center items-center">
            <h2 className="text-center text-2xl sm:text-4xl font-bold mb-3">
              &lt; Sobre mí /&gt;
            </h2>
            <p className="text-justify text-base sm:text-xl font-semibold">
              Ingeniero en Tecnología de la Informática con una pasión
              inquebrantable por la programación, especialmente en el desarrollo
              web. Con experiencia en el desarrollo de una plataforma de gestión
              de historias clínicas y seguimiento de salud en Biobotix Labs,
              donde implementé el backend con Laravel y el frontend con React,
              mejorando la eficiencia del flujo de trabajo médico al digitalizar
              procesos. Anteriormente, en COBAT 21, desarrollé una aplicación
              web para la gestión de alumnos, profesores, materias y
              calificaciones utilizando PHP, JavaScript, HTML y CSS. Mi enfoque
              está en crear soluciones web eficientes y de alta calidad que
              optimicen procesos clave.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
