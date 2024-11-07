// import { useState } from 'react';
import { motion } from 'framer-motion';
// import white_theme from "@/shared/assets/idea-svgrepo-com(7).svg";
// import black_theme from "@/shared/assets/idea-svgrepo-com(8).svg";
import { Header } from '@/widgets/header';
// import down_arrow from '@/shared/assets/down-arrow.svg'
import web_developer from "@/shared/assets/web-development-svgrepo-com.svg"
import back_develoer from "@/shared/assets/database-svgrepo-com.svg"
import development_icon from "@/shared/assets/developer-centerpublic-api-svgrepo-com.svg"
import math_involvement from "@/shared/assets/math-isvgrepo-com.svg"
import work_icon from "@/shared/assets/work-online-message-chat-internet-connection-svgrepo-com.svg"
import html from "@/shared/assets/html-5-svgrepo-com.svg"
import css from "@/shared/assets/css-3-svgrepo-com.svg"
import js from "@/shared/assets/js-svgrepo-com.svg"
import nodejs from "@/shared/assets/node-js-svgrepo-com.svg"
import ts from "@/shared/assets/typescript-svgrepo-com.svg"
import linux from "@/shared/assets/linux-svgrepo-com.svg"
import wp from "@/shared/assets/wordpress-svgrepo-com.svg"
import github from "@/shared/assets/github-142-svgrepo-com.svg"
import gitlab from "@/shared/assets/gitlab-svgrepo-com.svg"
import scss from "@/shared/assets/scss2-svgrepo-com.svg"
import xampp from "@/shared/assets/xampp-svgrepo-com.svg"
import { Link } from 'react-router-dom';
import { FollowCursor } from '@/widgets/follow-cursor';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  // const [isDark, setIsDark] = useState(false);
  const math_icon = 'https://img.icons8.com/?size=100&id=9470&format=png&color=000000';
  const development_text = 'Я — веб-разработчик, специализируюсь на фронтенде и бэкенде, и помогаю создавать высококачественные, быстрые и удобные веб-приложения. В своей работе я использую современные технологии и всегда ориентируюсь на лучший пользовательский опыт.';
  const approach = 'Иногда полезно описать свой подход или философию работы, чтобы потенциальные клиенты могли понять, как ты решаешь задачи и какие приоритеты у тебя есть. Я всегда ставлю безопасность и производительность на первое место, создавая масштабируемые и безопасные приложения';
  const involvement = 'Хотя моя основная профессиональная деятельность связана с веб-разработкой, я активно занимаюсь изучением математики и считаю, что она помогает мне развивать аналитическое мышление, решать сложные задачи и делать более обоснованные решения в работе.'
  const artwaga_group = 'https://media.licdn.com/dms/image/v2/D4E0BAQHjfKO0HfJQew/company-logo_200_200/company-logo_200_200/0/1682430189157/artwaga_inc_logo?e=1738800000&v=beta&t=_9YlukN3gNLDPsJu9eqcurMmHmQh9cfZKTnSC_0CwqM'
  const { t } = useTranslation()
  // const handleThemeChange = () => {
  //   setIsDark(!isDark);
  //   if (!isDark) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // };
  return (
    <>
      <div>
        <FollowCursor />
        {/* <motion.div
        className="absolute bottom-4 right-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          onClick={handleThemeChange}
          src={isDark ? white_theme : black_theme}
          alt="theme switch"
          className="cursor-pointer w-16 h-16"
        />
      </motion.div> */}
        <div className={`flex text-center justify-center flex-col w-full bg-[url('https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-mountain-landscape-before-sunset-free-photo.jpg?w=2210&quality=70')] bg-cover bg-center h-[750px]`}>
          <div className="absolute inset-0 bg-black bg-opacity-40 h-[750px]" />

          <Header />
          <motion.p
            className='z-10'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <p className='z-10 text-5xl font-mono mt-20'> {t("HI")} </p>
          </motion.p>
          <motion.p
            className='z-10'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <p className='z-10 text-xl font-mono mt-6 opacity-70'> {t("Full-Stack")} </p>
          </motion.p>

          <div className='flex w-full h-auto items-center justify-center absolute bottom-5'>
            {/* <img className='z-10 opacity-60 hover:opacity-100 duration-300 w-12' src={down_arrow} alt='arrow down' /> */}
          </div>
        </div>

        <div className='flex w-full h-auto text-center items-center justify-center flex-col pt-20'>
          <p className='z-10 text-black text-3xl font-extralight'> {t("LittleAboutMe")} </p>
          <img className='z-10 rounded-full w-[170px] h-[170px] border border-black my-6' src='' alt='image' />
          <div className='flex w-[34%] text-center flex-col gap-y-6'>
            <motion.p
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className='z-10 text-black font-thin'>
                {t("HiImA")}
              </p>
            </motion.p>

            <motion.p
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className='z-10 text-black font-thin'>
                {t("MathChess")}
              </p>
            </motion.p>

            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 150, opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className='bg-[#f0f0f0] w-full flex h-[200px] flex-col items-center py-6 gap-y-6'>
                <p className='text-black font-thin text-2xl'> {t("Self")} </p>
                <div className='flex w-[78%] justify-between'>
                  <div className='flex flex-col w-4/12 h-auto text-center items-center gap-1'>
                    <img
                      className='w-14'
                      src={web_developer}
                      alt='frontend'
                    />
                    <p className='font-thin text-black whitespace-nowrap'> {t("Frontend")} </p>
                  </div>
                  <div className='flex flex-col w-4/12 h-auto text-center items-center gap-1'>
                    <img
                      className='w-14'
                      src={back_develoer}
                      alt='backend'
                    />
                    <p className='font-thin text-black whitespace-nowrap'> {t("Backend")} </p>
                  </div>
                  <div className='flex flex-col w-4/12 h-auto text-center items-center gap-1'>
                    <img
                      className='w-14'
                      src={math_icon}
                      alt='math'
                    />
                    <p className='font-thin text-black whitespace-nowrap'> {t("Math")} </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='flex w-full justify-center mt-24 h-auto bg-[#f0f0f0]'>
          <div className='flex w-[80%] items-center flex-col mt-24'>
            <p className='font-thin text-2xl text-black'> {t("WhatIDo")} </p>
            <div className='flex w-full h-auto justify-between'>
              <div className='flex flex-col text-center items-center gap-4 mt-12'>
                <motion.img
                  className='w-44'
                  src={development_icon}
                  alt='development'
                  initial={{ opacity: 1 }}
                  whileHover={{
                    opacity: [1, 0.5, 1],
                    transition: { duration: 2, repeat: Infinity, repeatType: "loop" }
                  }}
                />
                <p className='font-mono text-xl text-black'> {t("Development")} </p>
                <p className='max-w-96 font-thin text-base text-black pb-4'> {development_text} </p>
              </div>
              <div className='flex flex-col text-center items-center gap-4 mt-12'>
                <motion.img
                  className='w-44'
                  src={work_icon}
                  alt='development'
                  initial={{ opacity: 1 }}
                  whileHover={{
                    opacity: [1, 0.5, 1],
                    transition: { duration: 2, repeat: Infinity, repeatType: "loop" }
                  }}
                />
                <p className='font-mono text-xl text-black'> {t("Approach")} </p>
                <p className='max-w-96 font-thin text-base text-black pb-4'> {approach} </p>
              </div>
              <div className='flex flex-col text-center items-center gap-4 mt-12'>
                <motion.img
                  className='w-44'
                  src={math_involvement}
                  alt='math'
                  initial={{ opacity: 1 }}
                  whileHover={{
                    opacity: [1, 0.5, 1],
                    transition: { duration: 2, repeat: Infinity, repeatType: "loop" }
                  }}
                />
                <p className='font-mono text-xl text-black'> {t("Pursuit")} </p>
                <p className='max-w-96 font-thin text-base text-black pb-4'> {involvement} </p>
              </div>
            </div>
            <div className='pb-20'></div>
          </div>
        </div>

        <div className='flex w-full items-center justify-center flex-col gap-5'>
          <p className='font-thin text-2xl text-black mt-24'> {t("Experience")} </p>
          <p className='font-mono text-base text-black'> {t("Pursuit")} </p>
          <div className='w-full flex justify-center'>
            <div className='flex w-[60%] flex-col gap-6'>
              <p className='font-mono text-lg text-black'> {t("Some")} </p>
              <div className='grid grid-cols-4 w-7/12 gap-10'>
                <img
                  className='w-14 h-16'
                  src={html}
                  alt='html' />
                <img
                  className='w-14 h-16'
                  src={css}
                  alt='css' />
                <img
                  className='w-14 h-16'
                  src={js}
                  alt='js' />
                <img
                  className='w-14 h-16'
                  src={nodejs}
                  alt='nodejs' />
                <img
                  className='w-14 h-16'
                  src={ts}
                  alt='ts' />
                <img
                  className='w-14 h-16'
                  src={linux}
                  alt='linux' />
                <img
                  className='w-14 h-16'
                  src={wp}
                  alt='wp' />
                <img
                  className='w-14 h-16'
                  src={github}
                  alt='github' />
                <img
                  className='w-14 h-16'
                  src={gitlab}
                  alt='gitlab' />
                <img
                  className='w-14 h-16'
                  src={scss}
                  alt='scss' />
                <img
                  className='w-14 h-16'
                  src={xampp}
                  alt='xampp' />
              </div>
            </div>
            <div className='flex flex-col items-start gap-4'>
              <p className='font-mono text-black text-lg'> {t("Where")} </p>
              <Link target='_blank' to={'https://www.linkedin.com/company/artwaga-inc/mycompany/'}>
                <img
                  className='w-44 h-40'
                  src={artwaga_group}
                  alt='artwaga image' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
