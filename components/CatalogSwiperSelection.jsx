'use client'
import { TbArrowUpRight } from "react-icons/tb"
import { Button } from "./ui/button"
import {motion} from 'framer-motion'
//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules' ;
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function CatalogSwiperSelection() {
  return (
    <div className="py-8 lg:py-28 container">
            <div className="container grid pb-8 lg:grid-cols-1">
                <div className="text-left">
                    <motion.h1
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={titleVariants}
                    className="py-4 text-4xl font-medium lg:text-6xl lg:py-0 ">Modern Class</motion.h1
                    >
                    <motion.h2
                     initial="offscreen"
                     whileInView={"onscreen"}
                     variants={desVariants}
                    className="pb-6 text-xl font-bold tracking-wider mt-5">LUSURY DECOR TO CREATE IN OUR HOME</motion.h2>
                </div>
                <motion.div
                 initial="offscreen"
                 whileInView={"onscreen"}
                 variants={tagVariants}
                className="grid grid-cols-2 text-gray-500 gap-x-8">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem id quas cumque eveniet nostrum assumenda labore perspiciatis, expedita sit natus voluptatibus voluptatum explicabo obcaecati? Minima eligendi totam ipsa voluptatum odio cupiditate quaerat sapiente facere eius modi odit iste, ratione adipisci quod vel pariatur esse ullam? In cupiditate suscipit recusandae voluptates velit praesentium. Laboriosam, magni mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati alias, facilis fugit nesciunt itaque delectus temporibus magnam maxime quod rem saepe animi, nulla dolorum exercitationem perspiciatis. Unde deserunt esse perspiciatis porro ex beatae, ratione quas molestiae obcaecati quasi, est dignissimos illo voluptatum accusantium sed aliquid vel?</p>
            
                </motion.div>
                <a href="/gallery">
                <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full
                shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">View Gallery <TbArrowUpRight className="w-5 h-5 ml-2" /> <TbArrowUpRight></TbArrowUpRight> </Button>
                </a>
            </div>
            {/* swiper section */}
            <Swiper
            slidePerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              }
            }}
            autoplay={{delay: 2500, disableOnInteraction: false}}
            modules={[Autoplay]}
            >
              <SwiperSlide>
               <Image src="/image/swiper1.jpg" alt="Swiper" width={520} height={220} className="w-full"/>
              </SwiperSlide>
              <SwiperSlide>
              <Image src="/image/swiper2.jpg" alt="Swiper" width={520} height={220} className="w-full"/>

              </SwiperSlide>
              <SwiperSlide>
              <Image src="/image/swiper3.jpg" alt="Swiper" width={520} height={220} className="w-full"/>

              </SwiperSlide>
              <SwiperSlide>
              <Image src="/image/swiper4.jpg" alt="Swiper" width={520} height={220} className="w-full"/>

              </SwiperSlide>
              <SwiperSlide>
              <Image src="/image/swiper5.jpg" alt="Swiper" width={520} height={220} className="w-full"/>

              </SwiperSlide>
            </Swiper>
    </div>
  )
}
