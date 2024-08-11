'use client'
import React from 'react'
import Badge from './Badge'
import { motion } from 'framer-motion'
import { desVariants, tagVariants } from '@/utils/animation'

export default function CompanySection() {
  return (
    <div className='bg-primary dark:bg-tertiary py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {/* Badge 1 */}
            <motion.div
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            className='mx-auto flex max-w-xs flex-col gap-y-4'
            >
                <dt className='text-white leading-7'>
                    Transition every 24 hours
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                <Badge
                endCountNum={44}
                endCountText="million"
                ></Badge>
                </dd>
              
            </motion.div>
            {/* Badge 2 */}
            <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={tagVariants}
            className='mx-auto flex max-w-xs flex-col gap-y-4'>
                <dt className='text-white leading-7'>
                   Assests under runing
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                <Badge
                endCountNum={119}
                endCountText="trillion"
                ></Badge>
                </dd>
              
            </motion.div>
            {/* Badge 3 */}
            <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={tagVariants}
            className='mx-auto flex max-w-xs flex-col gap-y-4'>
                <dt className='text-white leading-7'>
                  New User Annually
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                <Badge
                endCountNum={45000}
                endCountText="+"
                ></Badge>
                </dd>
              
            </motion.div>
        </dl>
      </div>
    </div>
  )
}
