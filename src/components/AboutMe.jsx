import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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
      <div className="bg-gray-500 w-11/12 lg:w-10/12 m-auto p-5 sm:p-10 mt-5 rounded-xl flex flex-col lg:flex-row text-center lg:text-left sm:min-h-96">
        <div className="flex-1 m-auto text-center">
          <img src="/logo192.png" className="inline-block m-auto text-center" />
        </div>
        <div className="flex-1">
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-3">
            &lt; Sobre mí /&gt;
          </h2>
          <p className="text-justify text-lg sm:text-xl font-semibold">
            Ingeniero en Tecnología de la Informática recientemente graduado con
            una pasión inquebrantable por la programación, especialmente en el
            campo del desarrollo web. Con experiencia práctica en el desarrollo
            y diseño de sitios web, he adquirido una sólida comprensión de
            diversas tecnologías y metodologías para la creación de productos
            digitales de alta calidad.
          </p>
        </div>
      </div>
    </div>
  );
};
