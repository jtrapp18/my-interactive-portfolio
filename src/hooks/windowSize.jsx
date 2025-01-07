import { useState, useEffect } from 'react';

const UseWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width <= 768;  // You can adjust this value as needed

  return isMobile;
};

export default UseWindowWidth;