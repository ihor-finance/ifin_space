import { FC } from "react";
import { UnorderedList as UnorderedListType } from "../types";

type UnorderedListProps = {
  list: UnorderedListType
}

const UnorderedList: FC<UnorderedListProps> = ({ list }) => {
  return (
    <ul className="unordered-list">
      {list.content.map((li) => (
        <li className="unordered-list__item" key={`${li.nodeType}${JSON.stringify(li.content)}`}>
          {li.content.map((p) => {
            return p.content.map((v) => (
              <p key={`${li.nodeType}${v.value}`}>&emsp;•&ensp;{v.value}</p>
            ));
          })}
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;