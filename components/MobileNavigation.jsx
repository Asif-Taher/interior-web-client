import { AlignJustify } from 'lucide-react'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

import Nav from './Nav'
import Logo from '@/components/Logo'

export default function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify
        className='cursor-pointer'
        >
          
        </AlignJustify>
      </SheetTrigger>
      <SheetContent>
          <div className='flex flex-col items-center justify-between h-full py-8'>
            <div className='flex flex-col '>
            <Logo></Logo>
              <Nav
              containerStyles='flex flex-col items-center gap-y-6'
              linkStyles='text-1xl font-semibold'
              ></Nav>
            </div>
          </div>
      </SheetContent>
    </Sheet>
  )
}
