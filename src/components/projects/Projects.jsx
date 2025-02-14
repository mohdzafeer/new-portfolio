import React from 'react'
import { projectdata } from './projectdata'
import styled from 'styled-components';

const Projects = () => {
    return (
        <div>
            <div className=''>
                <StyledWrapper className='grid grid-cols-3 gap-10 p-5'>
                    {projectdata.map((data) => {
                        return <div className="card w-full ">
                            <div className="card2 w-full flex flex-col items-center justify-center gap-6 px-3">
                                <img src={data.image} className='rounded-xl  mx-3'/>
                                <h1 className='text-lg font-bold'>{data.name}</h1>
                                <p className='text-sm font-medium text-gray-500 '>{data.desc}</p>
                                <a className='px-3 py-2 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:bg-blue-700 duration-200 active:bg-blue-400' href={data.link}>Try Live</a>
                            </div>
                        </div>
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