import { FC } from "react";

import { Hyperlink as HyperlinkType } from "../types";

type HyperlinkProps = {
  hyperlink: HyperlinkType
}

const Hyperlink: FC<HyperlinkProps> = ({ hyperlink }) => {
  return (
    <a 
      className="hyperlink highlighted" 
      href={hyperlink.data.uri} 
      target="_blank" 
      rel="noreferrer"
    >
      {hyperlink.content.map((h) => h.value).join("")}
    </a>
  );
};

export default Hyperlink;