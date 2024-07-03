'use client';
import axios from 'axios';
import { blog_data, assets } from '../../../Assets/assets'
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BlogPage = ({params}) => {

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {

   const response = await axios.get('/api/blog', {
    params:{
      id:params.id
    }
   })
   setData(response.data);

  }

  useEffect(() => {

    fetchBlogData();
},[] )

  return (
    data?<>
   
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
      <Link href={'../'} className='cursor-pointer'><Image src={assets.logo1} width={180} alt='' className='w-[130px] sm:w-auto'/>
       </Link> <Link href='/admin'><button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-custom-blue'>Lets Get It!! <Image src={assets.arrow} alt=''/></button></Link>
      </div>
      <div className="text-center my-24">
        <h1 className='text-2xl text-turk-blue sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image src={data.authorImg} className='mx-auto mt-6 border border-white rounded-full' width={60} height={60} alt=''/>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto text-turk-blue'>{data.author}</p>
      </div>
    </div> 
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
      <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}></div>
      
      <div className="my-24">
        <p className='text-turk-blue font-semibold my-4'>Share on Social Media</p>
        <div className="flex">
          <Image src={assets.facebook_icon} width={50} alt=''/>
          <Image src={assets.googleplus_icon} width={50} alt=''/>
          <Image src={assets.twitter_icon} width={50} alt=''/>
        </div>
      </div>
    </div>
    <Footer />
    </>: <></>
  )
}

export default BlogPage
