import { motion } from "framer-motion";

export const Header = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative isolate px-5 pt-1 lg:px-8 min-h-screen max-h-screen flex flex-wrap justify-normal content-center">
      <motion.div
        className="mx-auto md:px-24 py-28 sm:py-48 lg:py-44"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="w-full lg:w-7/12 px-10">
            <motion.h1
              className="text-3xl font-bold sm:text-3xl lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center "
              variants={item}
            >
              ¡Hola soy Alberto Gutierrez!
            </motion.h1>
            <motion.p className="mt-6 text-xl leading-8 text-gray-400 text-justify" variants={item}>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </motion.p>
          </div>
          <div className="w-5/12">
            <motion.img
              src="/img-header.JPEG"
              className="mt-7 sm:w-96  block m-auto"
              variants={item}
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <motion.a
            href="/Alberto-Gutierrez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Alberto-Gutierrez.pdf"
            className="rounded-md bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 active:to-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            variants={item}
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
