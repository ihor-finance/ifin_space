import { FC } from "react";

import { Text as TextType } from "../types";

import { getAllMarks } from "../utils/contentful";

type TextProps = {
  text: TextType
}

const Text: FC<TextProps> = ({ text }) => {
  const className = getAllMarks(text.marks);
  return className.length ? <span className={className}>{text.value}</span> : <>{text.value}</>;
};

export default Text;