import { FC, useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Entry } from "contentful";

import animationData from "../assets/lottie/programmer.json";

import ContentBlock from "../components/ContentBlock";
import ArticlePreview from "../components/ArticlePreview";

import ContentfulService from "../services/contentful";

import { ArticlePreview as ArticlePreviewType } from "../types";

import content from "../data/content.json";

import { parseWithHtml } from "../utils/content";

const contentfulInstance = new ContentfulService(
  process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
  process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || ""
);

const Main: FC = () => {
  const [previews, setPreviews] = useState<Entry<ArticlePreviewType>[]>([]);
  const animationContainer = useRef<null | HTMLDivElement>(null);

  const fetchPreviews = async () => {
    const fetchedPreviews = await contentfulInstance.getPreviews();
    setPreviews(fetchedPreviews.items.reverse());
  };

  const loadAnimation = () => {
    if (animationContainer.current && !animationContainer.current.children.length) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        animationData,
        loop: true,
        autoplay: true
      });
    }
  };

  useEffect(() => {
    fetchPreviews();
    loadAnimation();
  }, []);

  return (
    <div className="main">
      <section className="main-first-screen">
        <div className="container">
          <div className="main-first-screen__wrapper">
            <div className="main-first-screen__animation" ref={animationContainer}></div>
            <div className="main-first-screen__texts">
              {(content.pages.main.phrases || []).map((phrase) => (
                <div className="main-first-screen__phrase" key={phrase}>{parseWithHtml(phrase)}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="main-content-block">
        <ContentBlock>
          <p>{parseWithHtml(content.pages.main.quote)}</p>
        </ContentBlock>
      </div>
      <section className="main-blog">
        <div className="container">
          <h2 className="main-blog__title underlined">{content.pages.main.blog}</h2>
          <ul className="main-blog-articles-list">
            {previews.map((preview) => (
              <li className="main-blog-articles-list__article" key={preview.sys.id}>
                <ArticlePreview
                  id={preview.fields.articleId}
                  imageUrl={preview.fields.image.fields.file.url}
                  title={preview.fields.title}
                  description={preview.fields.description}
                  publishedAt={new Date(preview.sys.createdAt)}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Main;