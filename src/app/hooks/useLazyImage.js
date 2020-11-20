import { useState, useEffect } from "react";

const useLazyImage = (src) => {
  const [sourceLoaded, setsourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => setsourceLoaded(src);
  }, [src]);

  return sourceLoaded;
};

export default useLazyImage;
