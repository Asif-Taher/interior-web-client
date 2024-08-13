
'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
export default function ContactSection() {
    const posts = [
        {
            id: 1,
            title: 'Boost Your Convertion rate',
            href: "#",
            description: 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit  Dolorum minima, repellat tempore sapiente voluptas nostrum at ipsa nisi repellendus? Quas dolor velit reprehenderit libero officiis voluptatibus dolore amet rerum consequatur',
            date: 'Mar 16, 2024',
            datetime: '2024-03-16',
            categroy: {title: '4.7', href: '#'},
            author: {
                name: 'Natasha',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl: '/image/profile1.jpg',
            },
        },
        {
            id: 2,
            title: 'Boost Your Convertion rate',
            href: "#",
            description: 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit  Dolorum minima, repellat tempore sapiente voluptas nostrum at ipsa nisi repellendus? Quas dolor velit reprehenderit libero officiis voluptatibus dolore amet rerum consequatur',
            date: 'Mar 16, 2024',
            datetime: '2024-03-16',
            categroy: {title: '4.9', href: '#'},
            author: {
                name: 'Micheal Chris',
                role: 'Co-Founder / DEO',
                href: '#',
                imageUrl: '/image/profile2.jpg',
            },
        },
        {
            id: 3,
            title: 'Boost Your Convertion rate',
            href: "#",
            description: 
            'Lorem ipsum dolor sit amet consectetur adipisicing elit  Dolorum minima, repellat tempore sapiente voluptas nostrum at ipsa nisi repellendus? Quas dolor velit reprehenderit libero officiis voluptatibus dolore amet rerum consequatur',
            date: 'Mar 16, 2024',
            datetime: '2024-03-16',
            categroy: {title: '4.2', href: '#'},
            author: {
                name: 'Micheal Chris',
                role: 'Co-Founder / CTO',
                href: '#',
                imageUrl: '/image/profile3.jpg',
            },
        },
    ]
  return (
    <div className='pt-12'>
    
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl'>Customer Reviews</h2>
            <p className='mt-2 text-lg leading-8 text-muted-foreground'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic culpa maxime accusantium, nostrum voluptate quis?</p>

            <motion.div
             initial="offscreen"
             whileInView={"onscreen"}
             variants={tagVariants}
            className='mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16
            py-10 border-b border-gray-200 border-t gap-y-16
            '>
                {
                    posts.map((post)=>(
                        <article key={post.id}>
                                <div className='flex items-center gap-x-4 text-xs'>
                                    <time datetime={post.datetime}>
                                        <Image src="/image/star.svg" width={80} height={5}/>
                                    </time>
                                    <a href={post.categroy.href} className='relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black' >{post.categroy.title}</a>
                                </div>
                                <div className='group relative'>
                                    <motion.h3
                                     initial="offscreen"
                                     whileInView={"onscreen"}
                                     variants={titleVariants}
                                    className='mt-3 text-lg font-semibold leading-6
                                    gropu-hover:text-gray-600 mb-2'>
                                        <a href={post.href}>
                                            <span>{post.title}</span>
                                        </a>
                                    </motion.h3>
                                    <motion.p
                                     initial="offscreen"
                                     whileInView={"onscreen"}
                                     variants={desVariants}
                                    className='mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground'> 
                                        {post.description}
                                    </motion.p>
                                </div>
                                <div className='relative mt-8 flex items-center gap-x-4 '>
                                    <img src={post.author.imageUrl} alt="" className='h-10 w-10 rounded-full bg-gray-500' />
                                    <div className='text-sm leading-6'>
                                    <p className='font-semibold'>
                                        <a href={post.author.href}>
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className='text-muted-foreground'>{post.author.role}</p>
                                    </div>
                                  
                                </div>
                        </article>
                    ))
                }
            </motion.div>
        </div> 
    </div>
  )
}
