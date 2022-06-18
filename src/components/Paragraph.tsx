import { FC } from "react";

import { NodeType, Paragraph as ParagraphType } from "../types";

import AssetHyperlink from "./AssetHyperlink";
import EntryHyperlink from "./EntryHyperlink";
import Hyperlink from "./Hyperlink";
import Text from "./Text";

type ParagraphProps = {
  paragraph: ParagraphType
}

const Paragraph: FC<ParagraphProps> = ({ paragraph }) => {
  return (
    <div className="paragraph">
      <p className="paragraph__text">
        {paragraph.content.map((p, idx) => {
          switch(p.nodeType) {
          case NodeType.TEXT:
            return (
              <Text 
                text={p} 
                key={`${idx}${p.value}`}
              />
            );
          case NodeType.HYPERLINK:
            return (
              <Hyperlink 
                hyperlink={p} 
                key={`${idx}${p.nodeType}`}
              />
            );
          case NodeType.ENTRY_HYPERLINK:
            return (
              <EntryHyperlink 
                hyperlink={p} 
                key={`${idx}${p.nodeType}`}
              />
            );
          case NodeType.ASSET_HYPERLINK:
            return (
              <AssetHyperlink 
                hyperlink={p} 
                key={`${idx}${p.nodeType}`}
              />
            );
          default:
            break;
          }
        })}
      </p>
    </div>
  );
};

export default Paragraph;