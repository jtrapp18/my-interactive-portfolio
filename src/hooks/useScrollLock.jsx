import { useEffect } from "react";

const useScrollLock = (isLocked) => {
  useEffect(() => {
    const rootElement = document.documentElement;
    if (isLocked) {
      rootElement.classList.add("no-scroll");
    } else {
      rootElement.classList.remove("no-scroll");
    }

    return () => {
      rootElement.classList.remove("no-scroll");
    };
  }, [isLocked]);
};

export default useScrollLock;