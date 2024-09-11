import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const Skills = ({ setFocus }) => {
  const logosRef = useRef(null);

  const [elementRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setFocus((oldFocus) => ({ ...oldFocus, skills: isVisible }));
  }, [isVisible]);

  useEffect(() => {
    if (logosRef.current) {
      console.log(logosRef.current);
      const ul = logosRef.current;
      const clonedUl = ul.cloneNode(true);
      clonedUl.setAttribute("aria-hidden", "true");
      ul.parentNode.appendChild(clonedUl);
    }
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center content-center"
      ref={elementRef}
    >
      <h2 className="text-center text-white text-2xl sm:text-4xl font-bold mt-28 md:my-16">
        &lt; Mis skills /&gt;
      </h2>
      <div className="h-[500px] bg-gray-900">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
              <ul
                ref={logosRef}
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              >
                <li>
                  <img
                    src="/next-dot-js-svgrepo-com.svg"
                    alt="Spark"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/postgresql-svgrepo-com.svg"
                    alt="Samsung"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/react-svgrepo-com.svg"
                    alt="Quora"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/tailwind-svgrepo-com.svg"
                    alt="Sass"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/laravel-svgrepo-com.svg"
                    alt="Sass"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/next-dot-js-svgrepo-com.svg"
                    alt="Spark"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/postgresql-svgrepo-com.svg"
                    alt="Samsung"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/react-svgrepo-com.svg"
                    alt="Quora"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/tailwind-svgrepo-com.svg"
                    alt="Sass"
                    className="w-14"
                  />
                </li>
                <li>
                  <img
                    src="/laravel-svgrepo-com.svg"
                    alt="Sass"
                    className="w-14"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
