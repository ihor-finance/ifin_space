export enum NodeType {
  TEXT = "text",
  PARAGRAPH = "paragraph",
  DOCUMENT = "document",
  HYPERLINK = "hyperlink",
  ASSET_BLOCK = "embedded-asset-block",
  UNORDERED_LIST = "unordered-list",
  LIST_ITEM = "list-item",
  HEADING_6 = "heading-6",
  HEADING_5 = "heading-5",
  HEADING_4 = "heading-4",
  HEADING_3 = "heading-3",
  HEADING_2 = "heading-2",
  HEADING_1 = "heading-1",
  BLOCK_CODE = "block-code",
  ENTRY_HYPERLINK = "entry-hyperlink",
  ASSET_HYPERLINK = "asset-hyperlink",
  ORDERED_LIST = "ordered-list",
  HR = "hr"
}

export enum MarkType {
  CODE = "code",
  BOLD = "bold",
  ITALIC = "italic",
  UNDERLINE = "underline"
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

export interface Hyperlink {
  nodeType: NodeType.HYPERLINK,
  data: {
    uri: string
  },
  content: Text[],
}

export interface EntryHyperlink {
  nodeType: NodeType.ENTRY_HYPERLINK,
  data: {
    target: {
      sys: {
        id: string
      }
    }
  },
  content: Text[],
}

export interface AssetHyperlink {
  nodeType: NodeType.ASSET_HYPERLINK,
  data: {
    target: {
      fields: {
        file: {
          url: string,
          title: string
        }
      }
    }
  },
  content: Text[],
}

export interface Heading1 {
  nodeType: NodeType.HEADING_1,
  content: Text[]
}

export interface Heading2 {
  nodeType: NodeType.HEADING_2,
  content: Text[]
}

export interface Heading3 {
  nodeType: NodeType.HEADING_3,
  content: Text[]
}

export interface Heading4 {
  nodeType: NodeType.HEADING_4,
  content: Text[]
}

export interface Heading5 {
  nodeType: NodeType.HEADING_5,
  content: Text[]
}

export interface Heading6 {
  nodeType: NodeType.HEADING_6,
  content: Text[]
}

export interface Paragraph {
  data?: {
    target: Image
  },
  nodeType: NodeType.PARAGRAPH,
  content: (Text | Hyperlink | EntryHyperlink | AssetHyperlink)[],
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

export interface OrderedList {
  nodeType: NodeType.ORDERED_LIST,
  content: ListItem[]
}

export interface BlockCode {
  nodeType: NodeType.BLOCK_CODE,
  content: Text[]
}

export interface Hr {
  nodeType: NodeType.HR
}

export type Heading = Heading6 | Heading5 | Heading4 | Heading3 | Heading2 | Heading1;
export type Content = Paragraph | AssetBlock | UnorderedList | Heading | BlockCode | OrderedList | Hr;

export interface Article {
  title: string
  image: Image,
  content: {
    content: Content[]
  }
}