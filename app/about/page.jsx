"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TbArrowRight } from 'react-icons/tb'
import {motion, useScroll, useTransform} from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
export default function page() {
  const ref = useRef (null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  const scale = useTransform(scrollYProgress, [0,1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64 '>Who are we?</h1>
      </div>
      <div className='container'>
        <div className='pt-4'>
          <motion.h2
             initial="offscreen"
             whileInView={"onscreen"}
             variants={titleVariants}
          className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great idea and & interior Design</motion.h2>
          <motion.p
             initial="offscreen"
             whileInView={"onscreen"}
             variants={desVariants}
          className='text-2xl text-center font-medium pb-10 mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quod rerum, ab perspiciatis odit dolores consectetur impedit. Nisi quaerat, deleniti maxime eius, numquam minima facere rerum totam facilis odit aliquid excepturi magnam molestiae impedit ratione!</motion.p>

        </div>

        <div className='items-center lg:flex gap-x-8'>
          <motion.div
          style={{scale}}
          ref={ref}
          className='w-full'>
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>
          <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={tagVariants}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus deserunt quae sit architecto eum quaerat. Dolore veniam iste temporibus illum eaque inventore nostrum, sequi autem sapiente perferendis qui eum hic beatae odit. Mollitia eum fuga atque ullam perferendis beatae aspernatur minus. Earum non quidem odit sint qui eveniet harum!
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus deserunt quae sit architecto eum quaerat. Dolore veniam iste temporibus illum eaque inventore nostrum, sequi autem sapiente perferendis qui eum hic beatae odit. Mollitia eum fuga atque ullam perferendis beatae aspernatur minus. Earum non quidem odit sint qui eveniet harum!
              <br /> <br />
              <span className='text-xl font-extrabold tracking-tight'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde doloremque consectetur impedit ratione minus ab odio iure reprehenderit expedita.
              </span>
              </p>
          
              <Button className="inline-flex items-center px-8 py-3 shadow-lg mt-2 hover:bg-gray-800 hover:ring-3
              hover:ring-gray-950 ring-offset-2
              ">Read More <TbArrowRight  className='w-5 h-5 ml-2' /></Button>
          </motion.div>
        </div>
        {/* Team section */}
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1
               initial="offscreen"
               whileInView={"onscreen"}
               variants={titleVariants}
            className='text-4xl font-bold tracking-wider text-center uppercase'>Team</motion.h1>
          </div>
          <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={titleVariants}
          className='grid py-8 gap-20 lg:grid-cols-3'>
            <motion.div
               initial="offscreen"
               whileInView={"onscreen"}
               variants={desVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src='/image/profile2.jpg' width={200} height={200} alt='' className='mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase  '>Bulding Surveys</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, et! Ex, et eligendi quam molestiae adipisci minus asperiores? Veritatis commodi a eum maxime fugiat iure nisi autem mollitia! Tempore, accusantium.</p>
              
              </div>
            </motion.div>
            <motion.div
               initial="offscreen"
               whileInView={"onscreen"}
               variants={tagVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src='/image/profile1.jpg' width={200} height={200} alt='' className='mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase  '>Bulding Surveys</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, et! Ex, et eligendi quam molestiae adipisci minus asperiores? Veritatis commodi a eum maxime fugiat iure nisi autem mollitia! Tempore, accusantium.</p>
              
              </div>
            </motion.div>
            <motion.div
               initial="offscreen"
               whileInView={"onscreen"}
               variants={titleVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src='/image/profile3.jpg' width={200} height={200} alt='' className='mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase  '>Bulding Surveys</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, et! Ex, et eligendi quam molestiae adipisci minus asperiores? Veritatis commodi a eum maxime fugiat iure nisi autem mollitia! Tempore, accusantium.</p>
              
              </div>
            </motion.div>
          </motion.div>  
        </div>
      </div>
    </div>
  )
}
