import { FC } from "react";

import ExperienceCard from "../components/ExperienceCard";

import content from "../data/content.json";

import { parseWithHtml } from "../utils/content";

const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <section className="about-me-contacts">
        <div className="container">
          <div className="about-me-contacts__wrapper">
            <img 
              src={content.pages.about_me.quote_photo}
              alt="photo" 
              className="about-me-contacts__photo"
            />
            <div className="about-me-contacts__info">
              <p className="about-me-contacts__quote">
                {parseWithHtml(content.pages.about_me.quote)}
              </p>
              <ul className="about-me-contacts__socials">
                {(content.pages.about_me.socials || []).map((social) => (
                  <li className="about-me-contacts__social" key={social.link}>
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="about-me-contacts__social"
                    >
                      <img src={social.logo} alt={social.title} />
                      <p>{parseWithHtml(social.title)}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me-experience">
        <div className="container">
          <div className="about-me-experience__wrapper">
            <h2 className="about-me-experience__title underlined">
              {parseWithHtml(content.pages.about_me.my_experience)}
            </h2>
            {(content.pages.about_me.companies || []).map((company) => (
              <div className="about-me-experience__card" key={company.company_name}>
                <ExperienceCard
                  logo={company.logo}
                  from={company.from}
                  till={company.till}
                  link={company.website}
                  title={company.company_name}
                  stack={company.technologies}
                  position={company.position}
                >
                  {parseWithHtml(company.description)}
                </ExperienceCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;