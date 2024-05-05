import React, { useState } from 'react'
import Title from './Title'

const Services = ({price}) => {

  const [isChecked, setIsChecked] = useState([false, false, false]);

  const handleCheckboxChange = (index) => {
    setIsChecked(isChecked.map((checked, i) => i === index ? !checked : checked));
  };


  return (
    <div className='md:min-w-[412px]' >
      <Title 
      title="Pick add-ons"
      subTitle="Add-ons help enhance your gaming experience."
      />

      <div className={`w-full border mb-[10px] rounded-lg p-3 flex items-center  ${ isChecked[0] ?  "border-[--marin-blue] bg-[--magnol]" : null }  `} >
        <input className='w-[20px] h-[20px] mr-4 ' type="checkbox" onClick={() =>  handleCheckboxChange(0)} />
        <div className='grow'>
          <p className='text-[--marin-blue] font-medium text-[16px] mb-0 '>Online service</p>
          <p className='text-[--cool-grey] text-[13px] mt-0 ' >Access to multiplayer games</p>
        </div>
        <p className=' text-[--purp-blue] ' > { price ? "+$10/yr" : "+$1/mo"} </p>
      </div>

      <div className={`w-full border mb-[10px] rounded-lg p-3 flex items-center  ${ isChecked[1] ?  "border-[--marin-blue] bg-[--magnol]" : null }  `} >
        <input className='w-[20px] h-[20px] mr-4 ' type="checkbox" onClick={() => handleCheckboxChange(1)} />
        <div className='grow' >
          <p className='text-[--marin-blue] font-medium text-[16px] mb-0 '>Larger storage</p>
          <p className='text-[--cool-grey] text-[13px] mt-0 ' >Extra 1TB of cloud save</p>
        </div>
        <p className=' text-[--purp-blue]' > { price ? "+$20/yr" : "+2/mo" } </p>
      </div>

      <div className={`w-full border mb-[10px] rounded-lg p-3 flex items-center  ${ isChecked[2] ?  "border-[--marin-blue] bg-[--magnol]" : null }  `} >
        <input className='w-[20px] h-[20px] mr-4 ' type="checkbox" onClick={() => handleCheckboxChange(2)} />
        <div className='grow'>
          <p className='text-[--marin-blue] font-medium text-[16px] mb-0 '>Customizabe profile</p>
          <p className='text-[--cool-grey] text-[13px] mt-0 ' >Custom theme on your profile</p>
        </div>
        <p className=' text-[--purp-blue]' > { price ? "+$20/yr" : "+2/mo" } </p>
      </div>
    </div>
  )
}

export default Services