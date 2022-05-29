import { useEffect, useState, useRef } from "react";

export default function useIntersectionObserver(element, callback) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const theObserver = new IntersectionObserver(callbackRef.current, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    theObserver.observe(element);
    return () => {
      theObserver.disconnect();
    };
  }, [element]);
}
