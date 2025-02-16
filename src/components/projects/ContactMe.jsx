
import React from 'react'
import Swal from 'sweetalert2'

const ContactMe = () => {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "5f35ad34-00db-4908-b0fa-24de052cc16c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Message sent successfully",
                showConfirmButton: false,
                timer: 2000
              });

            event.target.reset();
        } else {
            console.log("Error", data);

        }
    };

    return (
        <div>

            <form className='flex flex-col' onSubmit={onSubmit}>
                <div className='flex flex-col'>
                    <div className='flex gap-6 lg:flex-row flex-col'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='lg:text-xl text-sm font-bold text-black' htmlFor='name'>Name</label>
                            <input type='text' className='w-full my-3 rounded-lg lg:text-xl text-sm px-3 py-2 shadow-lg bg-gray-100 border-transparent' placeholder='Enter Your Name please' required id='name' name='name' />
                        </div>
                        <div className='w-full'>
                            <label className='lg:text-xl text-sm font-bold text-black' htmlFor='email'>Email</label>
                            <input type='email' className='w-full my-3 rounded-lg lg:text-xl text-sm px-3 py-2 shadow-lg bg-gray-100 ' placeholder='Enter Your E-Mail please' required id='email' name='email' />
                        </div>
                    </div>
                    <label className='lg:text-xl text-sm font-bold text-black' htmlFor='message'>Message</label>
                    <textarea className='w-full my-3 rounded-lg lg:text-xl text-sm px-3 py-2 shadow-lg bg-gray-100 ' placeholder='Enter Your Message please' required id='message' name='message' />
                </div>
                <div className='flex justify-center'>
                    <button type='submit' className='lg:text-xl text-sm font-semibold px-4 py-3 rounded-lg bg-blue-500 text-white w-fit mt-5 cursor-pointer hover:shadow-lg hover:shadow-blue-300 duration-200 hover:bg-blue-600'>Send Message</button>
                </div>
            </form>

        </div>
    )
}

export default ContactMe