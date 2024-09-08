import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

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
      <h1>Hola que tal!</h1>
    </div>
  );
};
