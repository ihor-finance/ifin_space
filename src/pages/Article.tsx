import { Entry } from "contentful";
import { FC, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import AssetBlock from "../components/AssetBlock";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import UnorderedList from "../components/UnorderedList";
import CodeBlock from "../components/CodeBlock";

import { Article as ArticleType, NodeType } from "../types";

import { modifyBlockCodes } from "../utils/contentful";

import ContentfulService from "../services/contentful";

type Params = {
  articleId: string
}

const contentfulInstance = new ContentfulService(
  process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
  process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || ""
);

const Article: FC = () => {
  const [article, setArticle] = useState<Entry<ArticleType> | null>(null);
  const { articleId } = useParams<Params>();

  const fetchArticle = useCallback(async () => {
    const fetchedArticle = await contentfulInstance.getArticle(articleId || "");
    const modifiedContent = modifyBlockCodes(fetchedArticle.fields.content.content);
    
    fetchedArticle.fields.content.content = modifiedContent;
    setArticle(fetchedArticle);
  }, [articleId]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  if (!article) {
    return <></>;
  }

  return (
    <article className="article">
      <div className="container">
        <h1 className="article__title">{article.fields.title}</h1>
        <img 
          className="article__image" 
          alt={article.fields.image.fields.title} 
          src={article.fields.image.fields.file.url} 
        />
        {article.fields.content.content.map((entity, idx) => {
          switch (entity.nodeType) {
          case NodeType.PARAGRAPH:
            return (
              <div className="article__paragraph" key={idx}>
                <Paragraph paragraph={entity} />
              </div>
            );
          case NodeType.ASSET_BLOCK:
            return (
              <div className="article__asset-block" key={idx}>
                <AssetBlock assetBlock={entity} />
              </div>
            );
          case NodeType.UNORDERED_LIST:
            return (
              <div className="article__unordered-list" key={idx}>
                <UnorderedList list={entity} />
              </div>
            );
          case NodeType.HEADING_3:
            return (
              <div className="article__heading" key={idx}>
                <Heading heading={entity} />
              </div>
            );
          case NodeType.HEADING_2:
            return (
              <div className="article__heading" key={idx}>
                <Heading heading={entity} />
              </div>
            );
          case NodeType.HEADING_1:
            return (
              <div className="article__heading" key={idx}>
                <Heading heading={entity} />
              </div>
            );
          case NodeType.BLOCK_CODE:
            return (
              <div className="article__code-block" key={idx}>
                <CodeBlock value={entity} />
              </div>
            );
          }
        })}
      </div>
    </article>
  );
};

export default Article;