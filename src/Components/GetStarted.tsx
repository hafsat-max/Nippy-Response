import { Button } from '@mantine/core'
import React from 'react'
// import { Button } from '@mantine/core/lib/Button'

const GetStarted = () => {
  return (
    <section className='w-[100%] mx-0 mt-[78px] flex flex-col bg-white'>
        <h2 className='font-semibold text-[48px] leading-[120%] text-center text-[#0C0C0C]'>Get Started</h2>

        <p className='text-[#808080] font-medium text-[18px] leading-[26px] text-center'>Get help by emergency responses and safety awareness during emergency situations (Inferno, Accidents, Robbery e.t.c)</p>

        {/* <button  */}
        <Button className='bg-[#BA1419]  w-[200px] text-white m-auto mb-[15px] mt-[27px]'>Get Help</Button>
    </section>
  )
}

export default GetStarted