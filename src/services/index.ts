import ContentfulService from "./contentful";

class Services {
  readonly contentfulService: ContentfulService;

  constructor() {
    this.contentfulService = new ContentfulService(
      process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
      process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || ""
    );
  }
}

export default new Services();