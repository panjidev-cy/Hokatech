import React, { useEffect, useRef, useState } from "react";

const ScrollEffect = ({ children, className = "", threshold = 0.5 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} transition-opacity duration-500 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-5 scale-90"}`}>
      {children}
    </div>
  );
};

export default ScrollEffect;
