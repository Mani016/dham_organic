import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = props => {
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

  return props.children;
};

export default withRouter(ScrollToTop);
