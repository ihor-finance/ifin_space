import { FC, PropsWithChildren } from "react";

const ContentBlock: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return (
    <div className="content-block">
      {children}
    </div>
  );
};

export default ContentBlock;