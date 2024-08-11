'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
export default function AboutComponent() {
  return (
    <div className='container py-12 xl:py-24 h-[auto]'>
     <div className='grid lg:grid-cols-2 place-items-center'>
        <motion.div 
         initial="offscreen"
         whileInView={"onscreen"}
         variants={titleVariants}
        >
            <Image src="/image/aboutfront.png"
            width={900}
            height={500}
            alt='about' 
            className='max-md:hidden' />
        </motion.div>
        <div className='pl-10 items-center'>
            <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl  '>We are awards wining company</motion.h2>
            <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className=' px-12 tracking-wider uppercase text-gray-400 mt-3'>World Awards</motion.p>
            <motion.p 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='px-12 pb-4 mt-4'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Temporibus corrupti aliquam quisquam dignissimos magnam ea ipsam voluptatum consequuntur optio, 
                 numquam at eligendi. Nemo odio quidem laudantium numquam? At perferendis
                  ad dignissimos sed voluptatequo quod quae quidem ipsa laborum accusamus, inventore similique quis?
                   Officia, minus. Excepturi 
                earum debitis ab, nam optio fugit repellat, 
                laborum est obcaecati, cupiditate sapiente impedit iusto?
            </motion.p>
            <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='px-12 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut vitae, aperiam veniam molestias
                 sed, pariatur doloribus porro dolores fuga iusto libero laboriosam alias, doloremque
                 harum odit aspernatur perspiciatis fugiat facilis temporibus? Libero molestiae optio
                  incidunt nemo vel repellat velit?</motion.p>
        </div>
     </div>
    </div>
  )
}
