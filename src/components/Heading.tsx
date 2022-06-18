import { FC } from "react";

import { Heading as HeadingType, NodeType } from "../types";

type HeadingProps = {
  heading: HeadingType
}

const Heading: FC<HeadingProps> = ({ heading }) => {
  switch(heading.nodeType) {
  case NodeType.HEADING_3:
    return (
      <h3 className="heading heading--3">
        {heading.content.map((h) => h.value)}
      </h3>
    );
  case NodeType.HEADING_2:
    return (
      <h2 className="heading heading--2">
        {heading.content.map((h) => h.value)}
      </h2>
    );
  case NodeType.HEADING_1:
    return (
      <h1 className="heading heading--1">
        {heading.content.map((h) => h.value)}
      </h1>
    );
  default:
    return (
      <h3 className="heading heading--3">
        {heading.content.map((h) => h.value)}
      </h3>
    );
  }
};

export default Heading;