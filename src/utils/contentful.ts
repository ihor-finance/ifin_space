import { BlockCode, Content, Mark, MarkType, NodeType } from "../types";

export const createBlockCode = (value: string): BlockCode => {
  return {
    nodeType: NodeType.BLOCK_CODE,
    content: [
      {
        nodeType: NodeType.TEXT,
        marks: [],
        value
      }
    ]
  };
};

export const checkIsCode = (content: Content): boolean => {
  if (content.nodeType === NodeType.PARAGRAPH && content.content.length) {
    return content.content[0].nodeType === NodeType.TEXT 
      && content.content[0].marks.some((m) => m.type === MarkType.CODE);
  }
  return false;
};

export const getAllMarks = (marks: Mark[]): string => {
  let allMarks = "";
  marks.forEach((m) => {
    switch(m.type) {
    case MarkType.BOLD:
      allMarks += " bold";
      break;
    case MarkType.ITALIC:
      allMarks += " italic";
      break;
    case MarkType.UNDERLINE:
      allMarks += " underline";
      break;
    default:
      break;
    }
  });
  return allMarks;
};

export const joinCodeBlocks = (codeBlocks: BlockCode[]): BlockCode => {
  const blockCode = createBlockCode("");
  codeBlocks.forEach((val) => blockCode.content[0].value += `${val.content[0].value}\n`);
  return blockCode;
};

export const modifyBlockCodes = (content: Content[]): Content[] => {
  const modifiedContent = [] as Content[];
  let blockCodes = [] as BlockCode[];

  content.forEach((val, idx) => {
    const isCode = checkIsCode(val);

    if (!isCode) {
      modifiedContent.push(val);
    } else if (val.nodeType === NodeType.PARAGRAPH && val.content[0].nodeType === NodeType.TEXT) {
      const blockCode = createBlockCode(val.content[0].value);
      const isNextValCode = !!content[idx + 1] && checkIsCode(content[idx + 1]);

      blockCodes.push(blockCode);

      if (!isNextValCode) {
        const joinedCodeBlocks = joinCodeBlocks(blockCodes);
        modifiedContent.push(joinedCodeBlocks);
        blockCodes = [];
      } 
    }
  });

  return modifiedContent;
};
