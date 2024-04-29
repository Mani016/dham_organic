import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = (props) => {

  // for browser's back
  useEffect(() => {
    const unlisten = props.history.listen((location, action) => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      if (action === "POP" || action === "PUSH") {
        // Force a hard reload of the page
        window.location.reload(true);
      }
    });
    return () => {
      unlisten();
    };
  }, [props.history]);


  // for refresh the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
  
    window.addEventListener('unload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('unload', handleBeforeUnload);
    };
  }, []);

  return props.children;
};

export default withRouter(ScrollToTop);
