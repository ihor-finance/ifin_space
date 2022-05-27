import { FC } from "react";
import { CodeBlock as CodeBlockComponent, dracula } from "react-code-blocks";

import { BlockCode } from "../types";

type CodeBlockProps = {
  value: BlockCode
}

const CodeBlock: FC<CodeBlockProps> = ({ value }) => {
  return (
    <div className="code-block">
      <CodeBlockComponent
        text={value.content[0].value}
        theme={dracula}
        showLineNumbers={false}
        language="js"
        startingLineNumber
      />
    </div>
  );
};

export default CodeBlock;