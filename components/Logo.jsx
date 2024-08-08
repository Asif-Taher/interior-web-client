import React from 'react'
import logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'
export default function Logo() {
  return (
   <Link href='/'>
   <Image src={logo} alt='' width={160} height={55}></Image>
   </Link>
  )
}
