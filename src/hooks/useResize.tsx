import { useLayoutEffect, useState } from "react";

export default function useResize() {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const target = window;

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    target.addEventListener("resize", updateSize);

    updateSize();

    return () => target.removeEventListener("resize", updateSize);
  }, []);

  return size;
}
