import { FC } from "react";

import { NodeType, UnorderedList as UnorderedListType } from "../types";

type UnorderedListProps = {
  list: UnorderedListType
}

const UnorderedList: FC<UnorderedListProps> = ({ list }) => {
  return (
    <ul className="unordered-list">
      {list.content.map((li, idx) => (
        <li className="unordered-list__item" key={`${li.nodeType}${idx}`}>
          {li.content.map((p) => {
            return p.content.map((v) => {
              if (v.nodeType === NodeType.TEXT) {
                return (
                  <p key={`${li.nodeType}${v.value}`}>&emsp;•&ensp;{v.value}</p>
                );
              }
            });
          })}
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;