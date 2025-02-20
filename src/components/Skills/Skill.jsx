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

                    }}
                    whileHover={{
                        y: -10,
                        transition: { duration: 0.1, ease: 'linear' },

                    }}
                    className='flex flex-col items-center justify-center gap-4 border-2 border-gray-200 py-3 rounded-lg hover:bg-gray-100 hover:border-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200 duration-500  active:bg-blue-100'>
                    <img src={data.image} alt={data.name} className='rounded-full h-20' />
                    <h2 className='font-semibold text-xl align-middle text-black'>{data.name}</h2>
                </motion.div>)
            })}
        </div>
    )
}

export default Skill