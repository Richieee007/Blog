import Image from 'next/image'
import { assets } from '../../Assets/assets'
import React from 'react'

const BlogTableItem = ({authorImg, title, author, date, deleteBlog, mongoId}) => {
    const blogDate = new Date(date) 
    // Manually format the date to exclude the day
  const formattedDate = `${blogDate.toLocaleString('default', { month: 'short' })} ${blogDate.getDate()}, ${blogDate.getFullYear()}`;

  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image src={authorImg?authorImg:assets.profile_icon} width={60} height={60} alt=''/>
            <p>{author?author:"No Author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"No Title"}
        </td>
        <td className='px-6 py-4'>
            {formattedDate}
        </td>
        <td className='px-6 py-4 cursor-pointer' onClick={() => deleteBlog(mongoId)}>
            x
        </td>
      
    </tr>
  )
}

export default BlogTableItem
