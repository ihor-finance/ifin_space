import { FC } from "react";
import { Paragraph as ParagraphType } from "../types";

type ParagraphProps = {
  paragraph: ParagraphType
}

const Paragraph: FC<ParagraphProps> = ({ paragraph }) => {
  return (
    <div className="paragraph">
      {paragraph.content.map((p) => (
        <p key={p.value} className="paragraph__text">&emsp;{p.value}</p>
      ))}
    </div>
  );
};

export default Paragraph;