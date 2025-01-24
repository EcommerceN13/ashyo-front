import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderCategory from './HeaderCategory'
import HeaderSearchMobile from './HeaderSearchMobile'

export const Header = () => {
  return (
    <header className='mb-[27px] sm:mb-[20px] relative'>
        <HeaderTop />
        <HeaderMain />
        <HeaderCategory />
        <HeaderSearchMobile />
    </header>
  )
}
