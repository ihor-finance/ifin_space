import { FC } from "react";
import { AssetBlock as AssetBlockType } from "../types";

type AssetBlockProps = {
  assetBlock: AssetBlockType
}

const AssetBlock: FC<AssetBlockProps> = ({ assetBlock }) => {
  return (
    <div className="asset-block">
      <img 
        src={assetBlock.data.target.fields.file.url} 
        alt={assetBlock.data.target.fields.title}
      />
    </div>
  );
};

export default AssetBlock;