import { FC } from "react";

import content from "../data/content.json";

import { parseWithHtml } from "../utils/content";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a href="https://u24.gov.ua" target="_blank" rel="noreferrer">
        {parseWithHtml(content.components.footer.footer_link)}
      </a>
    </footer>
  );
};

export default Footer;