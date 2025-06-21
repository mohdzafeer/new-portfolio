import React from 'react'

import blog1 from '/images/blog1.png'
import blog2 from '/images/blog2.png'

const Blogs = () => {
    return (
        <div className='flex gap-6 flex-col lg:flex-row'>
            <div className='p-2 rounded-xl border-2 border-gray-100 lg:w-sm w-xs hover:bg-blue-100 hover:border-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200 duration-500  active:bg-blue-100 flex flex-col items-center justify-around'>

                <img src={blog1} alt='blog1' className='rounded-xl w-full shadow-xl' />
                <h2 className='font-bold text-xl text-center text-gray-600 mt-5'>Top 5 Social Engineering Techniques every Developer should know</h2>
                <a href='https://medium.com/@mohammadzafeer2610/top-5-social-engineering-techniques-every-developer-should-know-72f05b17389b' className='bg-blue-500 text-white font-bold text-lg px-3 py-2 rounded-xl w-fit my-5 hover:bg-blue-700 duration-200'>Read Now</a>
            </div>
            <div className='p-2 rounded-xl border-2 border-gray-100 lg:w-sm w-xs  hover:bg-blue-100 hover:border-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-200 duration-500  active:bg-blue-100 flex flex-col items-center justify-around'>

                <img src={blog2} alt='blog1' className='rounded-xl w-full shadow-xl' />
                <h2 className='font-bold text-xl text-center text-gray-600 mt-5'>Top 5 Common Coding Myths Debunked</h2>
                <a href='https://medium.com/@mohammadzafeer2610/5-common-coding-myths-debunked-006517ee8389' className='bg-blue-500 text-white font-bold text-lg px-3 py-2 rounded-xl w-fit my-5 hover:bg-blue-700 duration-200'>Read Now</a>
            </div>
        </div>
    )
}

export default Blogs