import { useEffect, useState } from "react";

//Route will return component based on path
//Listens for event set in Link to re-render when the user navigates
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const onLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener("popstate", onLocationChange);
    //cleanup
    return () => {
      window.removeEventListener("popstate");
    };
  }, []);
  return currentPath === path ? children : null;
};

export default Route;
