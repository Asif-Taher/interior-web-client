'use client'
import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {motion} from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
export default function Footer() {
  return (
    <div className='bg-tertiary'>
      <div className="container lg:grid lg:grid-cols-2 py-14">
        <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
          <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={titleVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Company</h2>
            <div className='flex flex-col'>
              <Link href='/'>About Us</Link>
              <Link href='/'>Press</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Contact</Link>
            </div>
          </motion.div>
          <motion.div 
             initial="offscreen"
             whileInView={"onscreen"}
             variants={desVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Development</h2>
            <div className='flex flex-col'>
              <Link href='/'>Documentation</Link>
              <Link href='/'>Referance</Link>
              <Link href='/'>Changelog</Link>
              <Link href='/'>Status</Link>
            </div>
          </motion.div>
          <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={tagVariants}
          >
            <h2 className='pb-4 text-xl font-semibold uppercase'>Connect</h2>
            <div className='flex flex-col'>
              <Link href='/'>Instragram</Link>
              <Link href='/'>Twitter</Link>
              <Link href='/'>LinkedIn</Link>
              <Link href='/'>Facebook</Link>
            </div>
          </motion.div>
        </div>
        <motion.div
           initial="offscreen"
           whileInView={"onscreen"}
           variants={titleVariants}
        >
          <p>Stay Updated</p>
          <div className='relative lg:max-w-sm'> 
          <Input type='name' id='first name' placeholder='Email Address'/>
          <Button className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2
          hover:border-black hover:bg-white hover:text-black dark:bg-primary">Subscribe</Button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis culpa eius laborum praesentium, assumenda quibusdam sequi quidem dolores excepturi dolorum numquam magni ut eos, consectetur qui quaerat unde officia expedita. Ea?</p>

        </motion.div>
      </div>
      {/* copyrignt  */}
      <motion.div
         initial="offscreen"
         whileInView={"onscreen"}
         variants={desVariants}
      className='py-10 bg-black dark:bg-primary'>
        <div className='container text-white text-center lg:justify-between lg:flex'>
          <div className='pb-4 lg:pb-0'>
            <p>&copy; 2024 interior. All Rignts Reserved</p>
          </div>
          <div>
            <Link className="p-4 hover:underline" href='/'>Privacy</Link>
            <Link className='p-4 hover:underline' href='/'>Terms</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
