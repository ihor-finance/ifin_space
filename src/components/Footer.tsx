import { FC } from "react";

import content from "../data/content.json";

import { parseWithHtml } from "../utils/content";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a 
        href={content.components.footer.footer_link} 
        target="_blank" 
        rel="noreferrer"
      >
        {parseWithHtml(content.components.footer.footer_link_text)}
        <img 
          src={content.components.footer.footer_image} 
          alt={content.components.footer.footer_link_text} 
        />
      </a>
    </footer>
  );

};

export default Footer;