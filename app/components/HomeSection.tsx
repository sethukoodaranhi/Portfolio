'use client';
import style from './css/home.module.css'
import { Inter } from 'next/font/google';
import {ReactTyped}  from 'react-typed';

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '800'],
});


function HomeSection() {
  return (
    <section className={`${style.home} ${inter.className} container`} id="home">
      <div className='row justify-center items-center h-full'>
        <div className="col-lg-6">
          <div className={style.leftSection}>
            <h1>Hello,</h1>
            <h4>It's me</h4>
            <h4 className={style.typing}>SETHULAKSHMI AS</h4>
            <h6>
              <ReactTyped
                strings={[
                  "React And Node.js Developer",
                  "Full-Stack Developer",
                  "UI/UX Enthusiast",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h6>
            <p>I build modern, scalable web applications with a focus on performance and user experience.</p>
            <a href="/cv/sethulakshmi_resume.pdf" download><button>Take my cv</button></a>
          </div>
        </div>
        <div className="col-lg-6 mt-1 relative">
          <div className={style.userImgwrapper}>
            <img src="/images/user.png" alt="User" className={style.mainUserImg} />

            <img src="/images/react.png" className={`${style.icon} ${style.react}`} alt="React" />
            <img src="/images/redux.png" className={`${style.icon} ${style.redux}`} alt="Redux" />
            <img src="/images/css.png" className={`${style.icon} ${style.css}`} alt="CSS" />
            <img src="/images/js.png" className={`${style.icon} ${style.js}`} alt="JS" />
            <img src="/images/node (2).png" className={`${style.icon} ${style.node}`} alt="Node.js" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default HomeSection
