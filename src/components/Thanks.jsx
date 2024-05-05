import React from 'react'
import thankImg from "../../public/assets/images/icon-thank-you.svg"
const Thanks = () => {
  return (
    <div className='text-center py-8 p-2' >
      <img className='mb-[25px] mx-auto w-[50px] h-[50px] ' src={thankImg} alt="" />
      <p className='text-[24px] text-[--marin-blue] font-bold mb-[10px] ' >Thank you!</p>
      <p className='text-[--cool-grey] text-[16px] leading-6 ' >Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Thanks