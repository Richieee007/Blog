'use client';
import { blog_data, assets } from '../../../Assets/assets'
import Footer from '../../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const BlogPage = ({params}) => {

  const [data, setData] = useState(null);

  const fetchBlogData =  () => {

    for(let i = 0;i<blog_data.length;i++){
      if (Number(params.id)===blog_data[i].id){
        setData(blog_data[i]);
        console.log(blog_data[i])
        break;
      }
    }

  }

  useEffect(() => {

    fetchBlogData();
},[] )

  return (
    data?<>
   
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className="flex justify-between items-center">
      <Link href={'../'} className='cursor-pointer'><Image src={assets.logo1} width={180} alt='' className='w-[130px] sm:w-auto'/>
       </Link> <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-custom-blue'>Lets Get It!! <Image src={assets.arrow} alt=''/></button>
      </div>
      <div className="text-center my-24">
        <h1 className='text-2xl text-turk-blue sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image src={data.author_img} className='mx-auto mt-6 border border-white rounded-full' width={60} height={60} alt=''/>
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto text-turk-blue'>{data.author}</p>
      </div>
    </div> 
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image className='border-4 border-white' src={data.image} width={1280} height={720} alt=''/>
      <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>In our latest blog post, we unravel the secrets of creating a perfect morning routine to kickstart your day with energy and positivity. Dive in for simple tips and practical advice that will transform your mornings from drab to fab!</h3>
      <p className="my-3">Discover the art of mindful living in our newest blog post, where we share easy techniques to stay present and reduce stress in your daily life. Learn how to bring calm and clarity to your busy schedule with just a few simple changes.</p>
      <h3 className='my-5 text-[18px] font-semibold'>In our latest blog post, we unravel the secrets of creating a perfect morning routine to kickstart your day with energy and positivity. Dive in for simple tips and practical advice that will transform your mornings from drab to fab!</h3>
      <p className="my-3">Discover the art of mindful living in our newest blog post, where we share easy techniques to stay present and reduce stress in your daily life. Learn how to bring calm and clarity to your busy schedule with just a few simple changes.</p>
      <h1 className='my-8 text-[26px] font-semibold'>Conclusion</h1>
      <h3 className='my-5 text-[18px] font-semibold'>In our latest blog post, we unravel the secrets of creating a perfect morning routine to kickstart your day with energy and positivity. Dive in for simple tips and practical advice that will transform your mornings from drab to fab!</h3>
      <p className="my-3">Discover the art of mindful living in our newest blog post, where we share easy techniques to stay present and reduce stress in your daily life. Learn how to bring calm and clarity to your busy schedule with just a few simple changes.</p>
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
