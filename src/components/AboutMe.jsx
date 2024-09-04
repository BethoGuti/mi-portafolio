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
      <div className="bg-gray-500 w-11/12 lg:w-10/12 m-auto p-10 mt-5 rounded-xl flex flex-col lg:flex-row text-center lg:text-left">
        <div className="flex-1 m-auto text-center">
          <img src="/logo192.png" className="inline-block m-auto text-center" />
        </div>
        <div className="flex-1">Hola que tal</div>
      </div>
    </div>
  );
};
