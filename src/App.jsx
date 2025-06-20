import './App.css'
import { SiGithub } from "react-icons/si";
import githubContri from '/images/github-contri.jpg'
import profile from '/images/profile.png'
import pfpic from '/images/pfpic.jpg'
import insta from '/images/insta.png'
import instaProfile from '/images/insta-profile.jpg'
import linkedin from '/images/linkedin.png'
import leetcode from '/images/leetcode.png'
import gmail from '/images/gmail.png'
import { useState } from 'react';
import Button from './components/sendMessageButton';
import Education from './components/Education';
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import Experience from './components/Experience';
import Projects from './components/projects/Projects';
import ContactMe from './components/projects/ContactMe';
import { motion } from 'motion/react'
import Skill from './components/Skills/Skill';
import { easeIn } from 'motion';



function App() {

  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);


  return (


    <div className='overflow-x-hidden scroll-smooth '>

      <div className='bg-white  min-w-screen min-h-screen xl:px-96 lg:px-72 px-10 md:px-20 lg:pt-10 pt-5 relative  '>
        {/* <div className='  fixed top-0 right-0 m-10 text-white' ><Switch /></div> */}
        {/* <button className=' bg-black fixed top-0 right-0 m-10 text-white px-3 py-2 rounded-lg font-bold cursor-pointer hover:bg-gray-800 duration-200' onClick={() => {setdarkMode(!darkMode),console.log(darkMode)}} >Dark Mode</button> */}
        <div className='  fixed bottom-0 right-0 m-10 text-white lg:inline-flex hidden' onClick={() => window.open('https://drive.google.com/drive/folders/1TPF0Ox6rETQhdBzs2XKuygcRGEEaf4uT?usp=drive_link')}><Button /></div>
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
          whileHover={{
            y: -10,
            transition: { duration: 0.2, ease: 'linear' },

          }}
          className='w-full bg-blue-500 rounded-2xl py-10 lg:gap-6 gap-1 flex flex-col justify-center items-center mb-10 hover:shadow-xl hover:shadow-blue-200 duration-500'>
          {/* <div className='w-full flex justify-start'><p className='text-sm text-gray-200 font-medium ml-10'>Hello</p></div> */}
          <div><img src={pfpic} alt='Profile Image' className='xl:h-60 lg:h-52 h-40 rounded-full' /></div>
          <div><h1 className='font-bold xl:text-4xl lg:text-2xl text-xl text-white'>Mohammad Zafeer</h1></div>
          <div><h1 className='font-medium lg:text-xl text-sm text-white'>Software Developer and Engineer</h1></div>
        </motion.div>

        <motion.div
          // initial={{
          //   opacity: 0
          // }}
          // animate={{
          //   opacity: 1,
          //   transition: { duration: 1, ease: 'easeInOut' }
          // }}

          className='w-full bg-gray-100 rounded-2xl py-10 px-10  gap-6 flex flex-col justify-center items-start lg:mb-10 mb-5 '>
          <p className='lg:text-sm md:text-sm text-xs text-gray-500 font-medium'>About me</p>
          <p className='font-medium lg:text-lg text-sm font-sans'>I am a Full-Stack MERN Developer passionate about building dynamic, scalable, and user-friendly web applications. With expertise in React.js, Node.js, Express.js, and MongoDB, I develop seamless front-end experiences and robust back-end architectures. My skills extend to authentication (JWT, Firebase, Next-Auth), payment integration (Stripe), and real-time features using WebSockets and Firebase. I have worked on diverse projects, including social media platforms, e-commerce sites, and Chrome extensions, always focusing on clean, maintainable code and intuitive user experiences.</p>
        </motion.div>

        <div className='w-full bg-white rounded-2xl lg:py-5 lg:px-10 px-5 py-3  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2'>
          <p className='font-bold font-sans lg:text-2xl text-lg'>Connect with Me</p>
        </div>

        <div className='flex xl:flex-row lg:flex-col flex-col lg:gap-10 gap-5 '>
          <motion.div
            // initial={{
            //   transition: { duration: 0.2 },
            //   scale: 0.5,
            //   opacity: 0
            // }}
            // whileInView={{
            //   scale: 1,
            //   transition: { duration: 0.5, ease: 'linear' },
            //   opacity: 1
            // }}
            // whileHover={{
            //   y: -10,
            //   transition: { duration: 0.2, ease: 'linear' },

            // }}
            className='lg:w-xl w-full bg-black  rounded-2xl lg:py-10 lg:px-10 px-3 py-2  lg:gap-6 gap-2 flex flex-col justify-center items-center lg:mb-10 mb-0 border-2 border-gray-100 cursor-pointer duration-200 ' onClick={() => window.open('https://github.com/mohdzafeer')}>

            <div className='flex items-center w-full justify-between '>
              <div className='flex justify-start lg:gap-4 gap-2 items-center'>
                <div className='p-3 rounded-full bg-white'>
                  <SiGithub className='lg:text-3xl text-sm' />
                </div>
                <p className='font-semibold lg:text-lg text-sm text-white'>Gihtub</p>
              </div>
              <div className='flex items-center'><button className='bg-white text-black font-medium px-3 py-2 rounded-lg cursor-pointer'>Follow</button></div>
            </div>
            <div className='github commits lg:inline-flex hidden'>
              <img src={githubContri} alt='githubContri' className='rounded-lg '></img>
            </div>
          </motion.div>

          <div className='flex flex-col'>
            <motion.div
              // initial={{
              //   transition: { duration: 0.2 },
              //   scale: 0.5,
              //   opacity: 0
              // }}
              // whileInView={{
              //   scale: 1,
              //   transition: { duration: 0.5, ease: 'linear' },
              //   opacity: 1
              // }}
              // whileHover={{
              //   y: -10,
              //   transition: { duration: 0.2, ease: 'linear' },

              // }}
              className='lg:w-xl w-full bg-white  rounded-2xl lg:h-56 h-full  lg:px-10 px-3 py-2  flex flex-col justify-center items-center lg:mb-10 mb-5 border-2 border-gray-100 cursor-pointer duration-500 hover:border-2 hover:border-blue-300 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-200' onClick={() => window.open('https://www.linkedin.com/in/mohammad-zafeer-626a63284/')}>
              <div className='flex w-full justify-between lg:items-start items-center'>
                <div><img src={linkedin} alt='insta' className='lg:h-16 h-12' /></div>
                <div><div className='bg-blue-500 text-white font-medium px-3 py-2 rounded-lg'>Connect</div></div>
              </div>
              <div className='flex w-full justify-between items-center'>
                <h1 className='username text-gray-700 font-bold text-xl lg:inline-flex hidden'>Mohammad Zafeer</h1>
                <img src={instaProfile} alt='insta profile' className='h-24 rounded-full lg:inline-flex hidden' />
              </div>
            </motion.div>


            <motion.div
              // initial={{
              //   transition: { duration: 0.2 },
              //   scale: 0.5,
              //   opacity: 0
              // }}
              // whileInView={{
              //   scale: 1,
              //   transition: { duration: 0.5, ease: 'linear' },
              //   opacity: 1
              // }}
              // whileHover={{
              //   y: -10,
              //   transition: { duration: 0.2, ease: 'linear' },

              // }}
              className='lg:w-xl w-full bg-white  rounded-2xl lg:py-5 py-2  lg:px-10 px-3  flex flex-col justify-center items-center lg:mb-10 mb-5 border-2 border-gray-100 cursor-pointer duration-500 hover:border-2 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-200 hover:bg-blue-100' onClick={() => window.location = 'mailto:mohammadzafeer2610@gmail.com'}>
              <div className='flex w-full justify-between items-center gap-6'>
                <img src={gmail} alt='insta profile' className='lg:h-20 h-8 ' />
                <div>
                  <h1 className='username text-gray-700 font-bold lg:text-xl text-sm'>Mohammad Zafeer</h1>
                  <h1 className='username text-gray-400 font-medium lg:text-sm text-xs'>mohammadzafeer2610@gmail.com</h1>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        <div className='w-full bg-white rounded-2xl lg:py-5 py-3 lg:px-10 px-5  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2'>
          <p className='font-bold font-sans lg:text-2xl text-lg'>Experience</p>
        </div>
        <motion.div
          // initial={{
          //   transition: { duration: 0.2 },
          //   scale: 0.5,
          //   opacity: 0
          // }}
          // whileInView={{
          //   scale: 1,
          //   transition: { duration: 0.5, ease: 'linear' },
          //   opacity: 1
          // }}
          // whileHover={{
          //   y: -10,
          //   transition: { duration: 0.2, ease: 'linear' },

          // }}
          className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2 hover:shadow-lg hover:shadow-blue-200 duration-500 hover:border-2 hover:border-blue-300'>
          {/* <p className='font-bold font-sans text-2xl'>Experience</p> */}
          <Experience />
        </motion.div>

        <div className='w-full bg-white rounded-2xl lg:py-5 py-3 lg:px-10 px-5  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2'>
          <p className='font-bold font-sans lg:text-2xl text-lg'>Projects</p>
        </div>

        <div className='lg:mb-10 mb-5'>
          <Projects />
        </div>

        <div className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2'>
          <p className='font-bold font-sans lg:text-2xl text-lg'>Skills</p>
        </div>

        <div className='lg:mb-10 mb-5'>
          <Skill />
        </div>

        <div className='w-full bg-white rounded-2xl lg:py-5 py-3 lg:px-10 px-5  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2'>
          <p className='font-bold font-sans lg:text-2xl text-lg'>Education</p>
        </div>

        <motion.div
          // initial={{
          //   transition: { duration: 0.2 },
          //   scale: 0.5,
          //   opacity: 0
          // }}
          // whileInView={{
          //   scale: 1,
          //   transition: { duration: 0.5, ease: 'linear' },
          //   opacity: 1
          // }}
          // whileHover={{
          //   y: -10,
          //   transition: { duration: 0.2, ease: 'linear' },

          // }}
          className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2 hover:shadow-2xl hover:shadow-blue-200 duration-500 hover:border-2 hover:border-blue-200'>
          {/* <p className='font-bold font-sans text-2xl'>Education</p> */}
          <Education />
        </motion.div>


        <div className='w-full bg-white rounded-2xl lg:py-5 py-3 lg:px-10 px-5 gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2'>
          <p className='font-bold font-sans lg:text-2xl text-lg'>Contact Me</p>
        </div>

        <motion.div
          // initial={{
          //   transition: { duration: 0.2 },
          //   scale: 0.5,
          //   opacity: 0
          // }}
          // whileInView={{
          //   scale: 1,
          //   transition: { duration: 0.5, ease: 'linear' },
          //   opacity: 1
          // }}
          // whileHover={{
          //   y: 0,
          //   transition: { duration: 0.2, ease: 'linear' },

          // }}
          className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  lg:mb-10 mb-5 border-gray-100 border-2 flex-col duration-500 hover:shadow-blue-200 hover:shadow-2xl  hover:border-blue-300'>
          <p className='lg:text-sm md:text-sm text-xs text-gray-500 font-medium'>Contact me</p>
          <ContactMe />
        </motion.div>


        <motion.div
          className='w-full bg-gray-100 rounded-2xl py-5 px-10 gap-6 flex flex-col items-center lg:mb-10 mb-5 border-gray-100 border-2'>

          <div className='w-full flex justify-start'>
            <p className='text-sm text-gray-500 font-medium'>Follow me</p>
          </div>

          <div className='flex items-center gap-8 justify-center w-full text-xs'>

            {/* Instagram */}
            <div className='relative flex flex-col items-center gap-0 cursor-pointer group'
              onClick={() => window.open('https://www.instagram.com/__mohd_zafeer__/')}>
              <FaInstagram className='h-12 cursor-pointer lg:text-2xl text-lg' />
              <p className='text-gray-500 font-medium cursor-pointer hover:text-gray-600 duration-200'>Instagram</p>
              <span className='absolute bottom-14 text-white bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 whitespace-nowrap'>
                Follow on Instagram
              </span>
            </div>

            {/* GitHub */}
            <div className='relative flex flex-col items-center gap-0 cursor-pointer group'
              onClick={() => window.open('https://github.com/mohdzafeer')}>
              <SiGithub className='h-12 cursor-pointer lg:text-2xl text-lg' />
              <p className='text-gray-500 font-medium cursor-pointer hover:text-gray-600 duration-200'>Github</p>
              <span className='absolute bottom-14 text-white bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 whitespace-nowrap'>
                View GitHub Profile
              </span>
            </div>

            {/* GFG */}
            <div className='relative flex flex-col items-center gap-0 cursor-pointer group'
              onClick={() => window.open('https://www.geeksforgeeks.org/user/mohammadzafeer2610/')}>
              <SiGeeksforgeeks className='h-12 cursor-pointer lg:text-2xl text-lg' />
              <p className='text-gray-500 font-medium cursor-pointer hover:text-gray-600 duration-200'>GFG</p>
              <span className='absolute bottom-14 text-white bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 whitespace-nowrap'>
                GeeksforGeeks Profile
              </span>
            </div>

            {/* LeetCode */}
            <div className='relative flex flex-col items-center gap-0 cursor-pointer group'
              onClick={() => window.open('https://leetcode.com/u/zafeer2610/')}>
              <SiLeetcode className='h-12 cursor-pointer lg:text-2xl text-lg' />
              <p className='text-gray-500 font-medium cursor-pointer hover:text-gray-600 duration-200'>Leetcode</p>
              <span className='absolute bottom-14 text-white bg-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 whitespace-nowrap'>
                LeetCode Profile
              </span>
            </div>

          </div>

          <div className='justify-center'>
            <p className='lg:text-sm text-xs text-gray-500 font-normal mt-5 text-center'>
              All Rights Reserved &copy; 2025 Mohammad Zafeer
            </p>
          </div>
        </motion.div>



      </div>

    </div>


  )
}

export default App
