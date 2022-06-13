import { FC } from "react";

import FerrExpoLogo from "../assets/images/Ferrexpo.png";
import { ReactComponent as TwitterLogo } from "../assets/images/tw_logo.svg";
import { ReactComponent as InstagramLogo } from "../assets/images/inst_logo.svg";
import { ReactComponent as Linkedin } from "../assets/images/linkedin_logo.svg";
import { ReactComponent as GmailLogo } from "../assets/images/gmail.svg";

import ExperienceCard from "../components/ExperienceCard";

const companies = [
  {
    logo: FerrExpoLogo,
    companyName: "FERREXPO",
    position: "Фахівець з іноваційної діяльності",
    website: "https://www.ferrexpo.com",
    from: "березня 2021",
    till: "квітень 2022",
    description: 
    <>В мої обов&apos;язки входило створення та розрахунки інвестиційних запросів та проєктів для покращення
    підприємницької діяльності. Також я займався стратегічним плануванням та прогнозуванням бізнес моделі ФХПО</>,
  }
];

const socials = [
  {
    logo: <TwitterLogo />,
    title: "Twitter",
    link: "https://twitter.com/ihor_finance"
  },
  {
    logo: <Linkedin />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ihor-pokhyton-378093230"
  },
  {
    logo: <InstagramLogo />,
    title: "Instagram",
    link: "https://www.instagram.com/ihor.finance"
  },
  {
    logo: <GmailLogo />,
    title: "igorek.pokhyton@gmail.com",
    link: "mailto:igorek.pokhyton@gmail.com"
  }
];

const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <section className="about-me-contacts">
        <div className="container">
          <div className="about-me-contacts__wrapper">
            <div className="about-me-contacts__info">
              <p className="about-me-contacts__quote">
                Коли я відпочивав в літку на морі у 2012, я побачив там одну
                людину яка працювала через телефон і тут я зрозумів, що також хочу
                так працювати в житті. Це був мій стимул щоб стати незалежним у плані фінансів.
                У 2014 році я почув про Валютний ринок. Почав шукати та знайшов курс одного брокера.
                Там я зрозумів що таке валютний ринок та як &quot;зливати&quot; депозити.
                Після чого я зрозумів що це не моє. У 2016 році я поступив до університету,
                на кафедру Фінансів. Там я зустрів одного товариша який теж захоплювався графіками
                та валютним ринком, і це він створив мені сайт. Дякую, брате!!! Він багато чого мене навчив.
                І ось вже сьогодні, всі ці роки я навчався, втрачав депозит, змінював стратегії, шукав сигнали та багато іншого.
                Та тепер я вже зрозумів, що не все так легко, як я собі уявляв. И ось тепер в мене є чіткий план, по
                якому я буду прямувати і описувати всі свої дії. Далі буде цікавіше!
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
              Мій досвід
            </h2>
            {companies.map((company) => (
              <div className="about-me-experience__card" key={company.companyName}>
                <ExperienceCard
                  logo={company.logo}
                  from={company.from}
                  till={company.till}
                  link={company.website}
                  title={company.companyName}
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