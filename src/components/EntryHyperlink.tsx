import { FC } from "react";
import { Link } from "react-router-dom";

import { EntryHyperlink as EntryHyperlinkType } from "../types";

type EntryHyperlinkProps = {
  hyperlink: EntryHyperlinkType
}

const EntryHyperlink: FC<EntryHyperlinkProps> = ({ hyperlink }) => {
  return (
    <Link
      to={`/article/${hyperlink.data.target.sys.id}`}
      className="hyperlink highlighted"
    >
      {hyperlink.content.map((h) => h.value).join("")}
    </Link>
  );
};

export default EntryHyperlink;