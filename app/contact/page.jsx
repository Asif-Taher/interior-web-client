'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { Switch } from "@headlessui/react";
import { TbArrowRampRight3, TbArrowRight } from "react-icons/tb";
import { useState } from "react";
import { Button } from '@/components/ui/button';
function classNames(...classes) {
  return classes.filter(Boolean).join('')
}
export default function page() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className='px-6 py-24 sm:py-32 lg:px-8 '>
      <div className='mx-auto max-w-2xl text-center '>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Contact Sales</h2>
        <p className='mt-2 text-lg leading-8 text-muted-foreground'>Please feel free to asked anything</p>
      </div>
      <form className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div className='mt-2.5'>
            <Input type='name' id='first name' placeholder='first name' />
          </div>
          <div className='mt-2.5'>
            <Input type='name' id='last name' placeholder='last name' />
          </div>
          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <Input type='name' id='Company' placeholder='Company' />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <Input type='email' id='Company' placeholder='Email Address' />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <div className='mt-2.5'>
              <Textarea placeholder='Type your message here....' />
            </div>
          </div>
          <Switch.Group as='div'>
            <div>
              <Switch checked={agreed}
                onChange={setAgreed}
                className={classNames(agreed ? 'bg-primary' : 'bg-gray-200',
                  'group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-400 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10'

                )}
              >
             <span className='sr-only text-black'>Agree to policies</span>
              <span aria-hidden="true" 
              className={classNames(
                agreed? 'translate-x-3.5' : 'translate-x-0',
                'pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7'
                )}
              />
              </Switch>
            </div>
          </Switch.Group>
          <div className='mt-10'>
            <Button type="submit"className="flex w-full items-center px-8 py-3 shadow-lg mt-2 hover:bg-gray-800 hover:ring-3
              hover:ring-gray-950 ring-offset-2">Let's Talk <TbArrowRight className='w-5 h-5 ml-2'/></Button>
          </div>
        </div>
      </form>
    </div>
  )
}
