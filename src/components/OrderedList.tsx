import { FC } from "react";

import { NodeType, OrderedList as OrderedListType } from "../types";

type OrderedListProps = {
  list: OrderedListType
}

const OrderedList: FC<OrderedListProps> = ({ list }) => {
  return (
    <ol className="ordered-list">
      {list.content.map((li, idx) => (
        <li className="ordered-list__item" key={`${li.nodeType}${idx}`}>
          {li.content.map((p) => {
            return p.content.map((v) => {
              if (v.nodeType === NodeType.TEXT) {
                return (
                  <p key={`${li.nodeType}${v.value}`}>&emsp;&ensp;{idx + 1}.&ensp;{v.value}</p>
                );
              }
            });
          })}
        </li>
      ))}
    </ol>
  );
};

export default OrderedList;