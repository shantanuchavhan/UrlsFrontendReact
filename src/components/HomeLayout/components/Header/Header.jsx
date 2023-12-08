import React from 'react'


import CountrySection from '../../../CountrySection/CountrySection'

const Header = () => {
  return (
    <div className='flex justify-between px-6 md:px-[100px] lg:px-[200px] py-10 text-white'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-lg font-semibold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          <CountrySection/>

    </div>
  )
}

export default Header