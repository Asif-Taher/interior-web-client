import Link from "next/link";
import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'
const links = [
    {path:'/', name: 'home'},
    {path:'/about', name: 'about'},
    {path:'/gallery', name: 'gallery'},
    {path:'/projects', name: 'projects'},
    {path:'/contact', name: 'contact'}
]
export default function Nav({containerStyles, linkStyles, underlineStyles}) {
    const path = usePathname();
  return (
  <nav className={`${containerStyles}`}>
    {
        links.map((link, index)=>{
            return (
                <Link
                href={link.path}
                key={index}
                className={`uppercase ${linkStyles}`}
                >
                    {
                        link.path === path && (
                            <motion.span 
                            initial = {{y: '-100%'}}
                            animate ={{ Y: 0}}
                            transition={{type : 'tween'}}
                            layoutId = 'underline'
                            className = {`${underlineStyles}`}

                            />
                        )
                    }
                    {link.name}
                </Link>
            )
        })
    }
  </nav>
  )
}
