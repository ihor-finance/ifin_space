import { FC } from "react";
import Lottie from "react-lottie";

import animationData from "../assets/lottie/404.json";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const NotFound: FC = () => {
  return (
    <div className="not-found">
      <Lottie options={animationOptions} />
    </div>
  );
};

export default NotFound;