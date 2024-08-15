import React from 'react'

export default function page() {
  return (
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <img src='/image/badroom.jpg' className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'/>
        </div>
        <div>
          <img src="/image/gallery2.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
        <div>
          <img src="/image/gallery.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img src='/image/swiper1.jpg' className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'/>
        </div>
        <div>
          <img src="/image/gallery11.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
        <div>
          <img src="/image/living.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img src='/image/gallery14.jpg' className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'/>
        </div>
        <div>
          <img src="/image/gallery15.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
        <div>
          <img src="/image/gallery12.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <img src='/image/gallery7.jpg' className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'/>
        </div>
        <div>
          <img src="/image/gallery11.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
        <div>
          <img src="/image/gallery3.jpg" className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' alt="" />
        </div>
      </div>
    </div>
  )
}
