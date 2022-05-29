import { FC, ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  children?: ReactNode
}

const ScrollToTop: FC<ScrollToTopProps> = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;