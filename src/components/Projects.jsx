import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { Button, Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { ItemCarrusel } from "./Projects/ItemCarrusel";

const projects = [
  {
    name: "Administrador de reportes",
    img: "/administrador-reportes.png",
    description:
      "Esta plataforma está diseñada para generar, administrar y visualizar reportes de vehículos robados a nivel nacional, con un enfoque en la recopilación de datos estadísticos sobre los estados de México con más incidencias y las marcas de vehículos más robadas. El sistema permite a los usuarios registrar reportes de manera eficiente y visualizar tendencias a través de gráficos y mapas interactivos.",
    linkProject: "https://administrador-reportes.vercel.app",
    technologies: [
      <img src="/next-dot-js-svgrepo-com.svg" className="w-11" />,
      <img src="/postgresql-svgrepo-com.svg" className="w-11 ms-2" />,
      <img src="/tailwind-svgrepo-com.svg" className="w-16 ms-2" />,
    ],
  },
  {
    name: "Biobotix Labs",
    img: "/biobotixlabs.png",
    description:
      "Este sistema está diseñado para llevar el control integral del historial clínico y las rutinas de rehabilitación de pacientes, centralizando toda la información médica y facilitando el seguimiento de los tratamientos de cada paciente. Está pensado para ser utilizado por clínicas de salud, médicos y fisioterapeutas, ofreciendo una interfaz intuitiva y accesible.",
    linkProject: "https://app.biobotixlabs.com",
    technologies: [
      <img src="/laravel-svgrepo-com.svg" className="w-11" />,
      <img src="/icons8-mysql.svg" className="w-16 ms-2" />,
      <img src="/react-svgrepo-com.svg" className="w-14 ms-2" />,
    ],
  },
];

export const Projects = ({ setFocus }) => {
  const [elementRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setFocus((oldFocus) => ({ ...oldFocus, projects: isVisible }));
  }, [isVisible]);

  return (
    <div
      className="min-h-screen flex flex-col justify-center content-center"
      ref={elementRef}
    >
      <h2 className="text-center text-white mt-20 text-2xl sm:text-4xl font-bold">
        &lt; Mis proyectos /&gt;
      </h2>
      <motion.div
        className="relative w-full px-2 lg:px-0 lg:w-10/12 m-auto md:h-[500px] shadow-md shadow-white rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          animationDelay: 10,
        }}
        viewport={{ once: true }}
      >
        <Carousel
          leftControl={
            <button className="m-0 h-12 w-12 rounded-full bg-gray-400 opacity-30 ">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-black font-bold"
              />
            </button>
          }
          rightControl={
            <button className="m-0 h-12 w-12 rounded-full bg-gray-400 opacity-30 ">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-black font-bold"
              />
            </button>
          }
        >

          {
            projects.map( project => <ItemCarrusel project={project}/>)
          }

        </Carousel>
      </motion.div>
    </div>
  );
};
