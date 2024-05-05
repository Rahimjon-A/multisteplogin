import React from 'react'
import Title from './Title'

const Finishing = ({price, changer, }) => {
  return (
    <div>
      <Title
      title="Finishing up"
      subTitle="Double-check everything looks OK before confirming."
      />

      <div className='w-full bg-[--magnol] py-4 px-3 rounded-lg mb-[30px] ' >
        <div className='flex items-center justify-between pb-2  border-b-[2px] mb-[15px] ' >
          <div>
            <p className='text-[--marin-blue] font-medium mb-0 ' >Arcade ( {price ? "Yearly" : "Monthly" } ) </p>
            <p className='mb-0 underline text-[--cool-grey] hover:text-[--pastel-blue] cursor-pointer ' onClick={changer} >Change</p>
          </div>
          <p className='text-[--marin-blue] font-medium ' > { price ? "$90/yr" : "$9/mo" } </p>
        </div>

        <div className='mb-[10px] flex items-center justify-between ' >
          <p className='text-[--cool-grey] ' >Online service</p>
          <span className='text-[--marin-blue] ' >{ price ? "$10/yr" : "$1/mo" }</span>
        </div>

        <div className='mb-[10px] flex items-center justify-between ' >
          <p className='text-[--cool-grey] ' >Larger storege</p>
          <span className='text-[--marin-blue] ' >{ price ? "$20/yr" : "$2/mo" }</span>
        </div>
      </div>

      <div className='mb-[10px] flex items-center justify-between ' >
          <p className='text-[--cool-grey] ' >Total (per month)</p>
          <span className='text-[--marin-blue] ' >{ price ? "$120/yr" : "$12/mo" }</span>
        </div>

    </div>
  )
}

export default Finishing