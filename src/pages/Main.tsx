import { FC, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Entry } from "contentful";

import animationData from "../assets/lottie/programmer.json";

import ContentBlock from "../components/ContentBlock";

import services from "../services";

import { ArticlePreview as ArticlePreviewType } from "../types";
import ArticlePreview from "../components/ArticlePreview";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Main: FC = () => {
  const [previews, setPreviews] = useState<Entry<ArticlePreviewType>[]>([]);

  const fetchPreviews = async () => {
    const fetchedPreviews = await services.contentfulService.getPreviews();
    setPreviews(fetchedPreviews.items);
  };

  useEffect(() => {
    fetchPreviews();
  }, []);

  return (
    <div className="main">
      <section className="main-first-screen">
        <div className="container">
          <div className="main-first-screen__wrapper">
            <div className="main-first-screen__animation">
              <Lottie options={animationOptions} />
            </div>
            <div className="main-first-screen__texts">
              <div className="main-first-screen__phrase">
                Hi! My name is <span className="highlighted">Nikita Isay</span>, 
                I am a tech person with experience in software development.
              </div>
              <div className="main-first-screen__phrase">
                I&#39;m interested in <span className="highlighted">front-end</span>, <span className="highlighted"> back-end </span> 
                development and <span className="highlighted"> blockchain</span> technologies.
                I really serious about creating useful and scalable software products, powered by modern technologies.
              </div>
              <div className="main-first-screen__phrase">
                This is my personal blog where I share my knowledges with everyone who 
                also interested in software development.
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="main-content-block">
        <ContentBlock>
          <p>
          One of my qualities is a strong desire to learn.
          Personal development is about challenging yourself. 
          You can never see any improvements if you stick to your comfort zone. 
          If you stop growing, you drown.
          </p>
        </ContentBlock>
      </div>
      <section className="main-blog">
        <div className="container">
          <h2 className="main-blog__title underlined">Blog</h2>
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