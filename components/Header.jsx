'use client';
import React, { useEffect, useState } from 'react'
import ThemToggler from './ThemToggler'
import Logo from './Logo';
import Nav from './Nav';
import MobileNavigation from './MobileNavigation';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [header,setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(()=>{

    const scrollYPos = window.addEventListener('scroll', ()=>{
      window.scrollY > 50? setHeader(true) : setHeader(false);0
    })
    return () => window.removeEventListener('scroll',scrollYPos);
  },[])
  return (
    <header className={`${
      header ? 'py-4 bg-tertiary shadow-lg dark:bg-occent'
      : 'py-6 dark: bg-transparent'
    } sticky top-0 z-30 transition-all`}>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between '>
          <Logo />
          <div className='flex items-center gap-x-6'> 

          {/* This is navbar section */}
          <Nav
          containerStyles='hidden xl:flex gap-x-8 items-center'
          linkStyles='relative hover:text-primary transition-all'
          underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
          ></Nav>
            {/* them component */}
          <ThemToggler></ThemToggler>

          <div className='xl:hidden'>
            {/* MobileNavigation components */}
            <MobileNavigation></MobileNavigation>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
