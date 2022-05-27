import { FC } from "react";

import { ReactComponent as MadAppGangLogo } from "../assets/images/madapp.svg";
import { ReactComponent as SpdLogo } from "../assets/images/spd_logo.svg";
import { ReactComponent as GitLogo } from "../assets/images/git_logo.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin_logo.svg";
import { ReactComponent as GmailLogo } from "../assets/images/gmail.svg";

import photo from "../assets/images/nik.jpg";
import ExperienceCard from "../components/ExperienceCard";

const companies = [
  {
    logo: <MadAppGangLogo />,
    companyName: "MadAppGang",
    position: "Front-End developer",
    website: "https://madappgang.com",
    from: "February 2020",
    till: "January 2022",
    description: 
    <>As a front-end developer at Madappgang, I&apos;ve developed different web sites and web applications. 
    I took a part in developing admin panel and web app for project with its own unique system of managing
    restaurant&apos;s orders and restaurant&apos;s business. Also I&apos;ve developed a Madappgang corporate website. I took
    a part in the developing project that helps track personal goals progress of each company employee 
    and organanize task planning proccess. I worked with different modern technologies during this period, such
    as JavaScript, Typescript, React, Redux and etc.</>,
    technologies: [
      "JavaScript", "TypeScript", "React", "Redux", "GatsbyJS", "StrapiJS", "HTML", "CSS", "Contentful"
    ]
  },
  {
    logo: <SpdLogo />,
    companyName: "SPD-Ukraine",
    position: "Node.js developer",
    website: "https://spd-ukraine.com",
    from: "January 2022",
    till: "now",
    description: 
    <>As a node.js developer at SPD-Ukraine, I am working at <a href="https://www.poynt.com" target="_blank" rel="noreferrer" className="highlighted">Poynt</a>. 
    It is an all-in-one payment platform, offers diverse benefits to businesses, with its contactless, fast, secure, and safe payment processing solution. 
    Poynt is powered by <a href="https://ua.godaddy.com" target="_blank" rel="noreferrer" className="highlighted">GoDaddy</a>. 
    I am taking a part in the developing proccess of front-end and back-end parts of the project.</>,
    technologies: [
      "JavaScript", "TypeScript", "NodeJS", "Express", "MySQL", "EmberJS", "HTML", "CSS", "ElasticSearch"
    ]
  }
];

const socials = [
  {
    logo: <GitLogo />,
    title: "GitHub",
    link: "https://github.com/nikitaisay"
  },
  {
    logo: <Linkedin />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/nikita-isay-20a2651b5"
  },
  {
    logo: <GmailLogo />,
    title: "nikita.isay4work@gmail.com",
    link: "mailto:nikita.isay4work@gmail.com"
  }
];

const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <section className="about-me-contacts">
        <div className="container">
          <div className="about-me-contacts__wrapper">
            <img src={photo} alt="Nikita Isay" className="about-me-contacts__photo"/>
            <div className="about-me-contacts__info">
              <p className="about-me-contacts__quote">
                Concern for man and his fate must always form the chief interest of all technical endeavors.<br />
                Never forget this in the midst of your diagrams and equations.
              </p>
              <ul className="about-me-contacts__socials">
                {socials.map((social) => (
                  <li className="about-me-contacts__social" key={social.link}>
                    <a 
                      href={social.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="about-me-contacts__social"
                    >
                      <div>{social.logo}</div>
                      <p>{social.title}</p>
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
              My experience
            </h2>
            {companies.map((company) => (
              <div className="about-me-experience__card" key={company.companyName}>
                <ExperienceCard
                  logo={company.logo}
                  from={company.from}
                  till={company.till}
                  link={company.website}
                  title={company.companyName}
                  stack={company.technologies}
                  position={company.position}
                >
                  {company.description}
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