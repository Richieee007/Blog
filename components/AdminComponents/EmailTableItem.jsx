import React from 'react'

const EmailTableItem = ({email, date, mongoId,deleteEmail}) => {
    const emailDate = new Date(date) 
    // Manually format the date to exclude the day
  const formattedDate = `${emailDate.toLocaleString('default', { month: 'short' })} ${emailDate.getDate()}, ${emailDate.getFullYear()}`;

  return (
    <tr className='bg-white border-b '>
        <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
           
            <p>{email?email:"No Email"}</p>
        </th>
        <td className='px-6 py-4 hidden sm:block'>
            {formattedDate}
        </td>
        <td className='px-6 py-4 cursor-pointer' onClick={() => deleteEmail(mongoId)}>
            x
        </td>
      
    </tr>
  )
}

export default EmailTableItem
