import parse from "html-react-parser";

export const parseWithVars = (text = "", args: string[] = []): string => {
  let idx = 0;
  return text
    .split(" ")
    .map((word) => {
      if (word === "$" && args[idx]) {
        idx += 1;
        return args[idx - 1];
      }
      if (word === "$" && !args[idx]) {
        return "";
      }
      return word;
    })
    .join(" ");
};

export const parseWithHtml = (text = "") => {
  return parse(text);
};
