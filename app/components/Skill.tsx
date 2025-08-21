'use client';

import { useState } from 'react';
import style from './css/skill.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});
interface Skill {
  src: string;
  alt: string;
  className: string;
  title: string;
  description: string;
}
function Skill() {
  const [hoveredSkill, sethoveredSkill] = useState<{ title: string, description: string, icon: string } | null>();

  const skills = [
    {
      src: '/images/react.svg',
      alt: 'React',
      className: style.react,
      title: 'React JS',
      description: 'Building dynamic UIs with component-based architecture'
    },
    {
      src: '/images/redux.svg',
      alt: 'Redux',
      className: style.redux,
      title: 'Redux',
      description: 'State management for complex applications'
    },
    {
      src: '/images/css.svg',
      alt: 'CSS',
      className: style.css,
      title: 'CSS3',
      description: 'Crafting beautiful, responsive layouts'
    },
    {
      src: '/images/js.svg',
      alt: 'JavaScript',
      className: style.js,
      title: 'JavaScript',
      description: 'Building interactive web applications'
    },
    {
      src: '/images/ts.svg',
      alt: 'TypeScript',
      className: style.ts,
      title: 'TypeScript',
      description: 'Type-safe development for scalable apps'
    },
    {
      src: '/images/html.svg',
      alt: 'HTML',
      className: style.html,
      title: 'HTML5',
      description: 'Creating structured, semantic markup'
    },
    {
      src: '/images/tailwind.svg',
      alt: 'Tailwind',
      className: style.tailwind,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS for rapid development'
    },
    {
      src: '/images/boostrap.svg',
      alt: 'Bootstrap',
      className: style.boostrap,
      title: 'Bootstrap',
      description: 'Responsive design with powerful components'
    },
    {
      src: '/images/node.svg',
      alt: 'Node.js',
      className: style.node,
      title: 'Node.js',
      description: 'Server-side JavaScript runtime'
    },
    {
      src: '/images/express.svg',
      alt: 'Express',
      className: style.express,
      title: 'Express.js',
      description: 'Fast, unopinionated web framework'
    },
    {
      src: '/images/figma.svg',
      alt: 'Figma',
      className: style.figma,
      title: 'Figma',
      description: 'Collaborative UI/UX design tool'
    },
    {
      src: '/images/docker.svg',
      alt: 'Docker',
      className: style.docker,
      title: 'Docker',
      description: 'Containerization for consistent deployment'
    },
    {
      src: '/images/mysql.svg',
      alt: 'MySQL',
      className: style.mysql,
      title: 'MySQL',
      description: 'Relational database management'
    },
    {
      src: '/images/mongodb.svg',
      alt: 'MongoDB',
      className: style.mongodb,
      title: 'MongoDB',
      description: 'NoSQL database for flexible data storage'
    },
  ];
  const handleHover = (skill: Skill) => {
    const { title, description, src } = skill;
    sethoveredSkill({ title, description, icon: src });
  };
  console.log("Skill component rendered", hoveredSkill);

  return (
    <section className={`${style.skill} ${inter.className}`} id="skill">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className={`${style.skillTitle}`}>Skills</h2>
            <div className={`${style.skillContent}`}>
              <img src={"/images/skillGalaxy.svg"} alt="React" className={style.orbit} />
              {/* icons */}
              <div className={style.iconWrapper}>
                {skills.map((skill, idx) => (
                  <div key={skill.alt + idx} className={style.skillItem}
                    onMouseEnter={() => handleHover(skill)}
                    onMouseLeave={() => sethoveredSkill(null)}>
                    <img
                      src={skill.src}
                      alt={skill.alt}
                      className={skill.className}
                    />

                  </div>
                ))}
              </div>
              {/* cardTooltip */}
              <div className={style.hoverBox}>
                {hoveredSkill && (
                  <div className={style.cardTooltip}>
                    <img src={hoveredSkill.icon} alt={hoveredSkill.title} className={style.tooltipIcon} />
                    <h3>{hoveredSkill.title}</h3>
                    <p>{hoveredSkill.description}</p>
                  </div>
                )}

                {/* mobile-view */}
                <div className={style.mobileView}>
                  <div className={style.skillGrid}>
                    {skills.map((skill, idx) => (
                      <div key={skill.alt + idx} className={style.skillCard}>
                        <div className={style.skillCardIcon}>
                          <img
                            src={skill.src}
                            alt={skill.alt}
                          />
                        </div>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill