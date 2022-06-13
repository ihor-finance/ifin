import * as contentful from "contentful";
import { Article, ArticlePreview } from "../types";

class ContentfulService {
  private client: contentful.ContentfulClientApi;

  constructor(space = "", accessToken = "") {
    this.client = contentful.createClient({
      space: space,
      accessToken: accessToken
    });
  }
  
  async getPreviews(): Promise<contentful.EntryCollection<ArticlePreview>> {
    try {
      const entries: contentful.EntryCollection<ArticlePreview> = await this.client.getEntries({
        order: "sys.createdAt",
        content_type: "preview"
      });
      return entries;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }

  async getArticle(id: string): Promise<contentful.Entry<Article>> {
    try {
      const entry = await this.client.getEntry(id);
      return entry as contentful.Entry<Article>;
    } catch (e) {
      throw new Error((e as Error).message);
    }
  }
}

export default ContentfulService;