import * as contentful from "contentful";
import { Article, ArticlePreview } from "../types";

class ContentfulService {
  private client: contentful.ContentfulClientApi;

  constructor(space: string, accessToken: string) {
    this.client = contentful.createClient({
      space: space,
      accessToken: accessToken
    });
  }
  
  async getPreviews(): Promise<contentful.EntryCollection<ArticlePreview>> {
    const entries: contentful.EntryCollection<ArticlePreview> = await this.client.getEntries({
      order: "sys.createdAt",
      content_type: "preview"
    });
    return entries;
  }

  async getArticle(id: string): Promise<contentful.Entry<Article>> {
    const entry = await this.client.getEntry(id);
    return entry as contentful.Entry<Article>;
  }
}

export default ContentfulService;