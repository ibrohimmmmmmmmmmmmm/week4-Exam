import React from 'react'

export default function OurManagers(props) {
  return (
    <div className='flex items-center md:justify-between w-full md:w-auto'>
      <div className='flex flex-col md:flex-row items-center  w-full'>
        <img 
          src={props.img} 
          alt="" 
          className='w-[160px] md:w-auto'
        />
        <div className='w-full md:w-[230px]'>
          <p className='text-[18px] md:text-[40px] text-center'>
            {props.name}
          </p>
          <div className='bg-[#EFA359] text-white mt-2'>
            <p className='text-[14px] md:text-[27px] text-center'>
              {props.job}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
