import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";
import { Button, Carousel } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

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
        className="relative w-full px-2 lg:px-0 lg:w-10/12 m-auto h-[500px] shadow-md shadow-white rounded-xl"
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
              <FontAwesomeIcon icon={faChevronLeft} className="text-black font-bold" />
            </button>
          }
          rightControl={
            <button className="m-0 h-12 w-12 rounded-full bg-gray-400 opacity-30 ">
              <FontAwesomeIcon icon={faChevronRight} className="text-black font-bold" />
            </button>
          }
        >
          <div className="w-full h-full">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full px-3">
              <img
                className="object-contain rounded-t-lg md:rounded-none md:rounded-s-lg w-2/4 shadow-lg"
                src="/administrador-reportes.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Administrador de reportes
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <div>
                  <h6 className="text-mb font-bold my-2">Tecnologías:</h6>
                  <div className="flex flex-row mt-1 content-center">
                    <img src="/next-dot-js-svgrepo-com.svg" className="w-11" />
                    <img
                      src="/postgresql-svgrepo-com.svg"
                      className="w-11 ms-2"
                    />
                    <img
                      src="/tailwind-svgrepo-com.svg"
                      className="w-16 ms-2"
                    />
                  </div>
                </div>
                <button className="m-auto">
                  <img src="/browser-svgrepo-com.svg" className="w-10" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full px-3">
              <img
                className="object-contain rounded-t-lg md:rounded-none md:rounded-s-lg w-2/4 shadow-lg"
                src="/biobotixlabs.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Biobotix Labs
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <button className="m-auto">
                  <img src="/browser-svgrepo-com.svg" className="w-10" />
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </motion.div>
    </div>
  );
};
