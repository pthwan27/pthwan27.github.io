import { useEffect, useState } from "react";

const useMousePositionDebounce = (delay: number = 100) => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [mouseY, setMouseY] = useState<number | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
      }, delay);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  return [mouseX, mouseY];
};

export default useMousePositionDebounce;
