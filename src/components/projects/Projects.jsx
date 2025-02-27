import React from 'react'
import { projectdata } from './projectdata'
import styled from 'styled-components';
import {motion} from 'motion/react'

const Projects = () => {
    return (
        <div>
            <div className=''>
                <StyledWrapper className='grid xl:grid-cols-3 xl:gap-10 lg:grid-cols-2 lg:gap-5 gap-3 grid-cols-1 '>
                    {projectdata.map((data) => {
                        return <motion.div 
                        initial={{
                            transition:{duration:0.1},
                            y:0
                        }}
                        whileInView={{
                            
                            transition:{duration:1, ease:'linear'}
                        }}
                        whileHover={{
                            y:-10,
                            transition:{duration:0.1 , ease:'linear'},
                            
                        }}
                        className="w-full rounded-xl border-2 border-gray-100 py-3 m-0 flex flex-col items-center justify-center gap-6 px-3 hover:border-2 hover:bg-blue-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200 duration-500 cursor-pointer">
                                <img src={data.image} className='rounded-xl  mx-3 border-2 border-gray-200'/>
                                <h1 className='text-lg font-bold text-center'>{data.name}</h1>
                                <p className='text-sm font-medium text-gray-500 text-center'>{data.desc}</p>
                                <button className='px-3 py-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:bg-blue-700 duration-300 active:bg-blue-400' onClick={()=>window.open(data.link)}>Try Live</button>
                            </motion.div>
                    })}
                </StyledWrapper>
            </div>
        </div>
    )
}


const StyledWrapper = styled.div`
  .card {
   
   height: 450px;
   background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
   border-radius: 20px;
   transition: all .3s;
  }

  .card2 {
   
   height: 450px;
   background-color: white;
   border: 1px solid rgba(0, 0, 0, 0.1);
   border-radius:20px;
   transition: all .2s;
  }

  .card2:hover {
   transform: scale(0.98);
   border-radius: 20px;
  }

  .card:hover {
   box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }`;

export default Projects