'use client';

import style from './css/about.module.css';
import { Sen,Inter } from 'next/font/google';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '800'],
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});


function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,      
      offset: 100,        
      easing: "ease-out",          
    });
  }, []);
  return (
    <section className={style.about} id="about">
      <div className="container">
        <h2 className={inter.className}>About</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className={`${style.avatarSection}`} data-aos="fade-left">
              <img src="/images/aboutGirl.png" alt="About Me" className={`${style.avatarImg}`}/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${style.aboutmeContent} ${sen.className}`} data-aos="fade-right">
              <h4>About Me</h4>
              <p>
                A passionate full-stack developer with 3 years of hands-on experience in building dynamic, scalable web applications. I specialize in React.js, Node.js, Express, and MongoDB. I've worked on projects like MLM platforms, LMS systems, and real-time chat apps—always focusing on clean code, intuitive UI, and strong backend logic. I love simplifying complex problems and continuously improving through collaboration and learning.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
