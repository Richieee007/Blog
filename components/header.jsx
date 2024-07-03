import Image from 'next/image'
import React, { useState } from 'react'
import { assets } from '../Assets/assets'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify';


const Header = () => {

  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {

    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);

    if (response.data.success) {
      toast.success(response.data.msg)
      setEmail("");

  }else {
    toast.error("Error");
  }


  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
        <Image src={assets.logo1} alt='Logo' width={180} className='w-[130px] sm:w-auto'/>
        <Link href='/admin'><button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-custom-blue'>Lets Go !! <Image src={assets.arrow} alt=''/></button></Link>
      </div>
      <div className="text-center my-8">
        <h1 className='text-3xl sm:text-5xl font-medium text-turk-blue'>Latest Blogs</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Check out our latest blog posts! Dive into fresh content, fun reads, and exciting stories that’ll brighten your day! Discover tips, tricks, and tales that will leave you inspired and smiling.
        </p>
        <form onSubmit={onSubmitHandler} action="" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-custom-blue'>

            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Enter your deets' className='pl-4 outline-none' />
            <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Header
