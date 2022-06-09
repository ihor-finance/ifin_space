export enum NodeType {
  TEXT = "text",
  PARAGRAPH = "paragraph",
  DOCUMENT = "document",
  ASSET_BLOCK = "embedded-asset-block",
  UNORDERED_LIST = "unordered-list",
  LIST_ITEM = "list-item",
  HEADING_3 = "heading-3",
  HEADING_2 = "heading-2",
  HEADING_1 = "heading-1",
  BLOCK_CODE = "block-code"
}

export enum MarkType {
  CODE = "code"
}

export type Mark = {
  type: MarkType
}

export interface Image {
  fields: {
    title: string,
    file: {
      url: string
    }
  }
}

export interface ArticlePreview {
  articleId: string,
  description: string,
  title: string,
  image: Image
}

export interface Text {
  nodeType: NodeType.TEXT,
  value: string,
  marks: Mark[]
}

export interface Heading3 {
  nodeType: NodeType.HEADING_3,
  content: Text[]
}

export interface Heading2 {
  nodeType: NodeType.HEADING_2,
  content: Text[]
}

export interface Heading1 {
  nodeType: NodeType.HEADING_1,
  content: Text[]
}

export interface Paragraph {
  data?: {
    target: Image
  },
  nodeType: NodeType.PARAGRAPH,
  content: Text[]
}

export interface AssetBlock {
  data: {
    target: Image
  },
  nodeType: NodeType.ASSET_BLOCK,
}

export interface ListItem {
  nodeType: NodeType.LIST_ITEM,
  content: Paragraph[]
}

export interface UnorderedList {
  nodeType: NodeType.UNORDERED_LIST,
  content: ListItem[]
}

export interface BlockCode {
  nodeType: NodeType.BLOCK_CODE,
  content: Text[]
}

export type Heading = Heading3 | Heading2 | Heading1;
export type Content = Paragraph | AssetBlock | UnorderedList | Heading | BlockCode;

export interface Article {
  title: string
  image: Image,
  content: {
    content: Content[]
  }
}