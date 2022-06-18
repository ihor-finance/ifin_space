import { FC } from "react";

import { AssetHyperlink as AssetHyperlinkType } from "../types";

type AssetHyperlinkProps = {
  hyperlink: AssetHyperlinkType
}

const AssetHyperlink: FC<AssetHyperlinkProps> = ({ hyperlink }) => {
  return (
    <a 
      href={hyperlink.data.target.fields.file.url}
      target="_blank" 
      rel="noreferrer"
      className="asset-hyperlink"
    >
      <img 
        src={hyperlink.data.target.fields.file.url} 
        alt={hyperlink.data.target.fields.file.title}
      />
    </a>
  );
};

export default AssetHyperlink;