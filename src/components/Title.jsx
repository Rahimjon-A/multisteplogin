import React from 'react'

const Title = ({title, subTitle}) => {
  return (
    <>
    <p className=" text-[--marin-blue] font-bold text-[24px] mb-2 " > {title} </p>
            <p className=" text-[--cool-grey] leading-7 mb-3 " > {subTitle} </p>
    </>
  )
}

export default Title