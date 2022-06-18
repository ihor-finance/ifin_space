import { FC, PropsWithChildren } from "react";

import { ReactComponent as LinkIcon } from "../assets/images/link_icon.svg";

import content from "../data/content.json";

import { parseWithVars } from "../utils/content";

type ExperienceCardProps = {
  logo: string,
  from: string,
  till: string,
  title: string,
  position: string,
  link?: string,
  stack?: string[]
}

const ExperienceCard: FC<PropsWithChildren<ExperienceCardProps>> = ({ 
  logo, 
  title, 
  from, 
  till, 
  position,
  stack = [],
  children,
  link
}) => {
  return (
    <div className="experience-card">
      <div className="experience-card__logo">
        <img src={logo} alt="company logo" />
      </div>
      <div className="experience-card__info">
        {link && (
          <a className="experience-card__company" href={link} target="_blank" rel="noreferrer">
            {title}<LinkIcon />
          </a>
        )}
        <p className="experience-card__position">{position}</p>
        <p className="experience-card__working-period">
          {parseWithVars(content.components.experience_card.working_period, [from, till])}
        </p>
        <p className="experience-card__description">{children}</p>
        <div className="experience-card__stack">
          {stack.map((technology) => <p key={technology}>{technology}</p>)}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;