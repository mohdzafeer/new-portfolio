import './App.css'
import { SiGithub } from "react-icons/si";
import githubContri from '/images/github-contri.jpg'
import profile from '/images/profile.png'
import insta from '/images/insta.png'
import instaProfile from '/images/insta-profile.jpg'
import linkedin from '/images/linkedin.png'
import leetcode from '/images/leetcode.png'
import Switch from './components/switch';
import { useState } from 'react';
import Button from './components/sendMessageButton';

function App() {

  const [darkMode, setdarkMode] = useState(true);
  // const changeDarkMode = () => {
  //   setdarkMode(!darkMode);
  //   // console.log(darkMode);
  // }

  return (


    <div className={!darkMode ? 'dark' : ''}>

      <div className='bg-white  min-w-screen min-h-screen xl:px-96 lg:px-72 px-10 md:px-20 pt-10 relative select-none '>
        {/* <div className='  fixed top-0 right-0 m-10 text-white' ><Switch /></div> */}
        {/* <button className=' bg-black fixed top-0 right-0 m-10 text-white px-3 py-2 rounded-lg font-bold cursor-pointer hover:bg-gray-800 duration-200' onClick={() => {setdarkMode(!darkMode),console.log(darkMode)}} >Dark Mode</button> */}
        <div className='  fixed bottom-0 right-0 m-10 text-white' ><Button /></div>
        <div className='w-full bg-blue-500 rounded-2xl py-10 gap-6 flex flex-col justify-center items-center mb-10 shadow-lg select-none '>
          {/* <div className='w-full flex justify-start'><p className='text-sm text-gray-200 font-medium ml-10'>Hello</p></div> */}
          <div><img src={profile} alt='Profile Image' className='h-60' /></div>
          <div><h1 className='font-bold text-4xl text-white'>Mohammad Zafeer</h1></div>
          <div><h1 className='font-medium text-xl text-white'>Software Developer and Engineer</h1></div>
        </div>

        <div className='w-full bg-gray-100 rounded-2xl py-10 px-10  gap-6 flex flex-col justify-center items-start mb-10 '>
          <p className='text-sm text-gray-500 font-medium'>About me</p>
          <p className='font-medium font-sans'>I am a Full-Stack MERN Developer passionate about building dynamic, scalable, and user-friendly web applications. With expertise in React.js, Node.js, Express.js, and MongoDB, I develop seamless front-end experiences and robust back-end architectures. My skills extend to authentication (JWT, Firebase, Next-Auth), payment integration (Stripe), and real-time features using WebSockets and Firebase. I have worked on diverse projects, including social media platforms, e-commerce sites, and Chrome extensions, always focusing on clean, maintainable code and intuitive user experiences.</p>
        </div>

        <div className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  mb-10 border-gray-100 border-2'>
          <p className='font-bold font-sans text-2xl'>Follow Me</p>
        </div>

        <div className='flex flex-row gap-10 '>
          <div className='w-xl bg-black  rounded-2xl py-10 px-10  gap-6 flex flex-col justify-center items-center mb-10 border-2 border-gray-100 cursor-pointer hover:bg-gray-900 duration-200' onClick={() => window.open('https://github.com/mohdzafeer')}>

            <div className='flex items-center w-full justify-between'>
              <div className='p-3 rounded-full bg-white'><SiGithub className='text-3xl' /></div>
              <div><button className='bg-white text-black font-medium px-3 py-2 rounded-lg cursor-pointer'>Follow</button></div>
            </div>
            <div className='github commits'>
              <img src={githubContri} alt='githubContri' className='rounded-lg'></img>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='w-xl bg-white  rounded-2xl h-56  px-10  flex flex-col justify-center items-center mb-10 border-2 border-gray-100 cursor-pointer hover:bg-gray-100 duration-200' onClick={() => window.open('https://www.linkedin.com/in/mohammad-zafeer-626a63284/')}>
              <div className='flex w-full justify-between items-start'>
                <div><img src={linkedin} alt='insta' className='h-16' /></div>
                <div><div className='bg-blue-500 text-white font-medium px-3 py-2 rounded-lg'>Connect</div></div>
              </div>
              <div className='flex w-full justify-between items-center'>
                <h1 className='username text-gray-700 font-bold text-xl'>Mohammad Zafeer</h1>
                <img src={instaProfile} alt='insta profile' className='h-24 rounded-full' />
              </div>
            </div>
            <div className='w-xl bg-white  rounded-2xl py-5  px-10  flex flex-col justify-center items-center mb-10 border-2 border-gray-100 cursor-pointer hover:bg-gray-100 duration-200' onClick={() => window.open('https://leetcode.com/u/zafeer2610/')}>
              <div className='flex w-full justify-between items-center'>
                <img src={leetcode} alt='insta profile' className='h-20 rounded-full' />
                <h1 className='username text-gray-700 font-bold text-xl'>Mohammad Zafeer</h1>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  mb-10 border-gray-100 border-2'>
          <p className='font-bold font-sans text-2xl'>Experience</p>
        </div>

        <div className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  mb-10 border-gray-100 border-2'>
          <p className='font-bold font-sans text-2xl'>Projects</p>
        </div>

        <div className='w-full bg-white rounded-2xl py-5 px-10  gap-6 flex  justify-start  mb-10 border-gray-100 border-2'>
          <p className='font-bold font-sans text-2xl'>Education</p>
        </div>

        <div className='w-full bg-gray-100 rounded-2xl py-5 px-10  gap-6 flex flex-col   items-center  mb-10 border-gray-100 border-2'>
          <div className='w-full flex justify-start'><p className='text-sm text-gray-500 font-medium'>Connect with me</p></div>
          <div className='font-bold font-sans text-2xl'>
            <ul className='flex gap-6'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

    </div>


  )
}

export default App
