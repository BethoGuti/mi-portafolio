import { useEffect } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Projects = ( {setFocus} ) => {
  const [elementRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.50,
  });

  useEffect(() => {
    setFocus((oldFocus) => ({ ...oldFocus, projects: isVisible }));
  }, [isVisible]);
  return (
    <div className="min-h-screen" ref={elementRef}>
      
    </div>
  );
};
