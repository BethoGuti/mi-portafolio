import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";

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
      <motion.div
        id="carouselExample"
        className="relative w-full px-2 lg:px-0 lg:w-10/12 m-auto h-[520px]"
        data-carousel="slide"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
          animationDelay: 10
        }}
        viewport={{ once: true }}
      >
        <div className="relative h-full overflow-hidden rounded-lg md:h-full">
          <div
            className="hidden duration-700 ease-in-out w-full h-full"
            data-carousel-item
          >
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-full">
              <img
                className="object-cover rounded-t-lg h-full md:rounded-none md:rounded-s-lg w-2/4"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </motion.div>
    </div>
  );
};
