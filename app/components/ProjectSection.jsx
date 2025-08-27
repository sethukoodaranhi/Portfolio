'use client';

import style from './css/project.module.css'
import { Inter, Sen } from 'next/font/google';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
});
const sen = Sen({
    subsets: ['latin'],
    weight: ['400', '700'],
});


function ProjectSection() {
    
 useEffect(() => {
    AOS.init({
      duration: 800,      
      offset: 100,        
      easing: "ease-out",          
    });
  }, []);

    return (
        <section className={`${style.project} ${inter.className}`} id='projects'>
            <div className="container">
                <h2 className={`${style.prjctHeading}`}>Projects</h2>
                <div className={`row ${style.projectRow}`}>
                    <div className={`col-lg-6 ${style.leftContent}`} data-aos="fade-down-right">
                        <div className={`${style.projectContentBox}`}>
                            <img src="/images/Hierarchy.svg" alt="" className={`${style.mlmImg}`} />
                            <h3 className={`${sen.className}`}>MLM Application</h3>
                            <p>Robust network-based platform for managing referrals, commissions, and team structures. Built with React and Node.js for high scalability and real-time insights.</p>
                        </div>
                    </div>
                    <div className={`col-lg-6 ${style.rightContent}`} data-aos="fade-down-left">
                        <a href="https://user.infinitemlmsoftware.com/login/binarydemo/INF00123?source=https://ioss.co/&_gl=1*1lb3b7v*_gcl_au*OTUwMTk5MjEyLjE3NTM4OTAzOTY." target="_blank" rel="noopener noreferrer" className={style.projectCard}>
                            <div className={style.imageContainer}>
                                <img src="/images/mlm_dashboard.svg" alt="MLM Dashboard" className={style.projectImage} />
                                <div className={style.overlay}>

                                    <span>Click to Open</span><br />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 512 512"
                                        className={style.wavyIcon}
                                    >
                                        <g fill="#2f2460">
                                            <path
                                                d="M512 356.18c0 4.91-3.223 9.132-7.68 10.582l-103.617 33.941-33.941 103.617c-1.473 4.457-5.696 7.68-10.582 7.68-4.778 0-8.79-3.008-10.344-7.125l-89.047-233.727c-.574-1.238-.789-2.562-.789-4.011 0-6.125 5.012-11.137 11.137-11.137 1.449 0 2.773.215 4.011.79l233.747 89.046c4.097 1.535 7.105 5.547 7.105 10.344m0 0"
                                                data-original="#000000"
                                            ></path>
                                            <path
                                                d="M234.668 469.332C105.281 469.332 0 364.055 0 234.668S105.281 0 234.668 0s234.664 105.281 234.664 234.668c0 10.453-.68 20.734-2.047 30.547-1.601 11.648-12.289 19.863-24.02 18.219-11.69-1.598-19.84-12.372-18.218-24.043 1.086-7.891 1.621-16.211 1.621-24.723 0-105.856-86.125-192-192-192-105.879 0-192 86.144-192 192s86.121 192 192 192c8.445 0 16.766-.555 24.746-1.645 11.606-1.62 22.422 6.57 24.02 18.243 1.578 11.668-6.59 22.418-18.262 24.02-9.875 1.366-20.137 2.046-30.504 2.046m0 0"
                                                data-original="#000000"
                                            ></path>
                                            <path
                                                d="M224.535 362.348c-.664 0-1.324-.024-2.008-.086-66.218-6.145-116.18-61.016-116.18-127.617 0-70.743 57.536-128.297 128.298-128.297 66.816 0 121.687 50.066 127.617 116.457 1.047 11.734-7.594 22.101-19.352 23.148-12.031.852-22.078-7.637-23.144-19.351-3.97-44.247-40.555-77.61-85.121-77.61-47.211 0-85.633 38.399-85.633 85.633 0 44.437 33.324 81.023 77.484 85.14 11.734 1.087 20.352 11.477 19.266 23.212-1.028 11.07-10.328 19.37-21.227 19.37zm0 0"
                                                data-original="#000000"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </a>


                    </div>
                </div>
                <div className={`row ${style.projectRow}`}>
                    <div className={`col-lg-6 ${style.rightContent}`} data-aos="fade-up-right">
                        <a href="https://your-project-link.com" target="_blank" rel="noopener noreferrer" className={style.projectCard}>
                            <div className={style.imageContainer}>
                                <img src="/images/dating.svg" alt="MLM Dashboard" className={style.projectImage} />
                                <div className={style.overlay}>

                                    <span>Click to Open</span><br />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 512 512"
                                        className={style.wavyIcon}
                                    >
                                        <g fill="#2f2460">
                                            <path
                                                d="M512 356.18c0 4.91-3.223 9.132-7.68 10.582l-103.617 33.941-33.941 103.617c-1.473 4.457-5.696 7.68-10.582 7.68-4.778 0-8.79-3.008-10.344-7.125l-89.047-233.727c-.574-1.238-.789-2.562-.789-4.011 0-6.125 5.012-11.137 11.137-11.137 1.449 0 2.773.215 4.011.79l233.747 89.046c4.097 1.535 7.105 5.547 7.105 10.344m0 0"
                                                data-original="#000000"
                                            ></path>
                                            <path
                                                d="M234.668 469.332C105.281 469.332 0 364.055 0 234.668S105.281 0 234.668 0s234.664 105.281 234.664 234.668c0 10.453-.68 20.734-2.047 30.547-1.601 11.648-12.289 19.863-24.02 18.219-11.69-1.598-19.84-12.372-18.218-24.043 1.086-7.891 1.621-16.211 1.621-24.723 0-105.856-86.125-192-192-192-105.879 0-192 86.144-192 192s86.121 192 192 192c8.445 0 16.766-.555 24.746-1.645 11.606-1.62 22.422 6.57 24.02 18.243 1.578 11.668-6.59 22.418-18.262 24.02-9.875 1.366-20.137 2.046-30.504 2.046m0 0"
                                                data-original="#000000"
                                            ></path>
                                            <path
                                                d="M224.535 362.348c-.664 0-1.324-.024-2.008-.086-66.218-6.145-116.18-61.016-116.18-127.617 0-70.743 57.536-128.297 128.298-128.297 66.816 0 121.687 50.066 127.617 116.457 1.047 11.734-7.594 22.101-19.352 23.148-12.031.852-22.078-7.637-23.144-19.351-3.97-44.247-40.555-77.61-85.121-77.61-47.211 0-85.633 38.399-85.633 85.633 0 44.437 33.324 81.023 77.484 85.14 11.734 1.087 20.352 11.477 19.266 23.212-1.028 11.07-10.328 19.37-21.227 19.37zm0 0"
                                                data-original="#000000"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </a>


                    </div>
                    <div className={`col-lg-6 ${style.leftContent}`} data-aos="fade-up-left">
                        <div className={style.projectContentBox}>
                            <img src="/images/Heart.svg" alt="no icon" className={style.mlmImg} />
                            <h3 className={sen.className}>Dating Application</h3>
                            <p>Modern dating platform with real-time chat, profile matching, and swipe interactions. Built using Socket.io, React, and Node.js for seamless UX.</p>
                        </div>
                    </div>
                </div>
                <div className={`row ${style.projectRow}`}>
                    <div className={`col-lg-6 ${style.leftContent}`}  data-aos="fade-down-right">
                        <div className={style.projectContentBox}>
                            <img src="/images/Learning apps.svg" alt="" className={style.mlmImg} />
                            <h3 className={sen.className}>LMS Application</h3>
                            <p>Interactive learning management system featuring course uploads, user progress tracking, and quizzes. Powered by React, Node.js, and Sql.</p>
                        </div>
                    </div>
                    <div className={`col-lg-6 ${style.rightContent}`} data-aos="fade-down-left">
                        <a href="https://lmsuser.infinitemlmsoftware.com/" target="_blank" rel="noopener noreferrer" className={style.projectCard}>
                            <div className={style.imageContainer}>
                                <img src="/images/lms.svg" alt="MLM Dashboard" className={style.projectImage} />
                                <div className={style.overlay}>

                                    <span>Click to Open</span><br />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 512 512"
                                        className={style.wavyIcon}
                                    >
                                        
                                        <g fill="#2f2460">
                                            <path
                                                d="M512 356.18c0 4.91-3.223 9.132-7.68 10.582l-103.617 33.941-33.941 103.617c-1.473 4.457-5.696 7.68-10.582 7.68-4.778 0-8.79-3.008-10.344-7.125l-89.047-233.727c-.574-1.238-.789-2.562-.789-4.011 0-6.125 5.012-11.137 11.137-11.137 1.449 0 2.773.215 4.011.79l233.747 89.046c4.097 1.535 7.105 5.547 7.105 10.344m0 0"
                                                data-original="#000000"
                                            ></path>
                                            <path
                                                d="M234.668 469.332C105.281 469.332 0 364.055 0 234.668S105.281 0 234.668 0s234.664 105.281 234.664 234.668c0 10.453-.68 20.734-2.047 30.547-1.601 11.648-12.289 19.863-24.02 18.219-11.69-1.598-19.84-12.372-18.218-24.043 1.086-7.891 1.621-16.211 1.621-24.723 0-105.856-86.125-192-192-192-105.879 0-192 86.144-192 192s86.121 192 192 192c8.445 0 16.766-.555 24.746-1.645 11.606-1.62 22.422 6.57 24.02 18.243 1.578 11.668-6.59 22.418-18.262 24.02-9.875 1.366-20.137 2.046-30.504 2.046m0 0"
                                                data-original="#000000"
                                            ></path>
                                            <path
                                                d="M224.535 362.348c-.664 0-1.324-.024-2.008-.086-66.218-6.145-116.18-61.016-116.18-127.617 0-70.743 57.536-128.297 128.298-128.297 66.816 0 121.687 50.066 127.617 116.457 1.047 11.734-7.594 22.101-19.352 23.148-12.031.852-22.078-7.637-23.144-19.351-3.97-44.247-40.555-77.61-85.121-77.61-47.211 0-85.633 38.399-85.633 85.633 0 44.437 33.324 81.023 77.484 85.14 11.734 1.087 20.352 11.477 19.266 23.212-1.028 11.07-10.328 19.37-21.227 19.37zm0 0"
                                                data-original="#000000"
                                            ></path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </a>


                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProjectSection