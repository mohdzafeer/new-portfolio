
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { motion } from 'motion/react'
import Input from '../Input'

const ContactMe = () => {
    const [loading, setLoading] = useState(false)
    const onSubmit = async (event) => {

        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.target);

        formData.append("access_key", "5f35ad34-00db-4908-b0fa-24de052cc16c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setLoading(false)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message sent successfully",
                showConfirmButton: false,
                timer: 2000
            });

            event.target.reset();
        } else {
            setLoading(false)
            console.log("Error", data);

        }
    };

    return (
        <div
        >

            <form className='flex flex-col' onSubmit={onSubmit}>
                <input type="hidden" name="subject" value="New message on zafeer.in" />
                <input type="hidden" name="from_name" value="ZAFEER.IN"></input>

                
                <div className='flex flex-col lg:gap-6 gap-3'>
                    <div className='flex lg:gap-6 gap-3 lg:flex-row flex-col'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='lg:text-xl text-sm font-bold text-black ml-3' htmlFor='name'>Name</label>
                            <input type='text' className='w-full my-3 rounded-lg lg:text-xl text-sm px-3 py-2 shadow-lg bg-gray-100 outline-none' placeholder='Enter Your Name please' required id='name' name='name' />
                        </div>
                        <div className='w-full'>
                            <label className='lg:text-xl text-sm font-bold text-black ml-3' htmlFor='email'>Email</label>
                            <input type='email' className='w-full my-3 rounded-lg lg:text-xl text-sm px-3 py-2 shadow-lg bg-gray-100 outline-none' placeholder='Enter Your E-Mail please' required id='email' name='email' />
                        </div>
                    </div>
                    <label className='lg:text-xl text-sm font-bold text-black ml-3' htmlFor='message'>Message</label>
                    <textarea className='w-full mb-3 rounded-lg lg:text-xl text-sm px-3 py-2 shadow-lg bg-gray-100 outline-none ' placeholder='Enter Your Message please' required id='message' name='message' />
                </div>
                
                
                {/* <Input/> */}
                
                
                <div className='flex justify-center'>
                    {loading ? 
                    <button
                    

                     className='lg:text-xl text-sm font-semibold px-4 py-3 rounded-lg bg-gray-500 text-white w-fit mt-5 cursor-not-allowed  newclass '>Sending...</button> 
                    :
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}

                        type='submit' className='lg:text-xl text-sm font-semibold px-4 py-3 rounded-lg bg-blue-500 text-white w-fit mt-5 cursor-pointer hover:shadow-lg hover:shadow-blue-300 duration-200 hover:bg-blue-600'>{loading ? 'Sending...' : 'Send Message'}</motion.button>    
                }
                </div>
            </form>

        </div>
    )
}

export default ContactMe