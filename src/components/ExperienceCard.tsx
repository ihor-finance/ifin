import { FC, PropsWithChildren } from "react";

import { ReactComponent as LinkIcon } from "../assets/images/link_icon.svg";

type ExperienceCardProps = {
  logo: string,
  from: string,
  till: string,
  title: string,
  position: string,
  link: string,
}

const ExperienceCard: FC<PropsWithChildren<ExperienceCardProps>> = ({ 
  logo, 
  title, 
  from, 
  till, 
  position,
  children,
  link
}) => {
  return (
    <div className="experience-card">
      <div className="experience-card__logo">
        <img src={logo} alt={title} />
      </div>
      <div className="experience-card__info">
        <a className="experience-card__company" href={link} target="_blank" rel="noreferrer">
          {title}<LinkIcon />
        </a>
        <p className="experience-card__position">{position}</p>
        <p className="experience-card__working-period">
          З {from} по {till}
        </p>
        <p className="experience-card__description">{children}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;