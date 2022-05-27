import { FC } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

type ArticlePreviewProps = {
  imageUrl: string,
  title: string,
  description: string,
  publishedAt: Date,
  id: string
}

const ArticlePreview: FC<ArticlePreviewProps> = ({ imageUrl, title, description, publishedAt, id }) => {
  return (
    <Link to={`/articles/${id}`}>
      <div className="article-preview">
        <img className="article-preview__image" src={imageUrl} alt={title} />
        <h3 className="article-preview__title">{title}</h3>
        <p className="article-preview__date">{format(publishedAt, "MMMM d, y")}</p>
        <p className="article-preview__description">{description}</p>
      </div>
    </Link>
  );
};

export default ArticlePreview;