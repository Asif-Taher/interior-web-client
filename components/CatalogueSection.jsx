import Image from "next/image"
import { TbArrowNarrowRight } from "react-icons/tb"

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            catagory: "BEDROOM SETUP",
            title: "COSSY Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "Family drowing room and  clean and comportable design for your familly.",
        },
        {
            id: "02",
            catagory: "KITCHEN SETUP",
            title: "Neat & Clean setup",
            image: "/image/kitchen1.jpg",
            description: "Family drowing room and  clean and comportable design for your familly.",
        },
        {
            id: "03",
            catagory: "DROWING SETUP",
            title: "Neat & Clean setup",
            image: "/image/drowing.jpg",
            description: "Family drowing room and  clean and comportable design for your familly.",
        },
        {
            id: "04",
            catagory: "LIVING SETUP",
            title: "Neat & Clean setup",
            image: "/image/living.jpg",
            description: "Family drowing room and  clean and comportable design for your familly.",
        },
    ]
  return (
    <div className="container grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
        {
            items.map((item)=>(
                <div
                key={item.id}
                className="relative overflow-hidden group">
                    <div>
                    <Image src={item.image}
                    width={380}
                    height={100}
                    alt=""
                    className="w-full"
                    > 
                    </Image>
                    </div>
                    <div className="absolute top-0 p-8 bg-white text-black font-bold opacity-60 backdrop-blur m-12">
                        <div className="flex justify-between pb-4 ">
                            <p className="text-sm"> {item.catagory}</p>
                            <span className="text-sm">{item.id}</span>
                        </div>
                        <a className="black text-xl font-semibold " href="">{item.title}</a>
                        <p className="py-4">{item.description}</p>
                        <a href="" className="inline-flex items-center font-medium"> See Details <TbArrowNarrowRight></TbArrowNarrowRight> </a>
                    </div>
                  <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16
                  text-xl duration-300 ease-in-out group-hover:translate-y-full md:border-b-0 hidden
                  ">
                    <p>{item.catagory}</p>
                    <span>{item.id}</span>
                  </div>
                </div>
            ))
        }
    </div>
  )
}
