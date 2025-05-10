import React from 'react'
import { skillData } from './SkillData'
import { motion } from 'motion/react'
const Skill = () => {
    return (
        <div className='grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 w-full '>
            {skillData.map((data) => {
                return (<motion.div
                    initial={{
                        transition: { duration: 0.1 },
                        scale:0.5,
                        opacity:0,
                    }}
                    whileInView={{
                        scale:1,
                        opacity:1,
                        transition:{duration:0.5,ease:'linear'}
                    }}
                    whileHover={{
                        y: -10,
                        transition: { duration: 0.1, ease: 'linear' },

                    }}
                    className='flex flex-col items-center justify-center gap-4 border-2 border-gray-100 py-3 rounded-xl hover:bg-blue-100 hover:border-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200 duration-500  active:bg-blue-100'>
                    <img src={data.image} alt={data.name} className='rounded-full h-20' />
                    <h2 className='font-semibold text-sm lg:text-lg align-middle text-gray-500'>{data.name}</h2>
                </motion.div>)
            })}
        </div>
    )
}

export default Skill