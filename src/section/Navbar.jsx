import { motion } from 'framer-motion'
import { useState } from 'react'
import close from '../../public/assets/close.png'
import menu from '../../public/assets/menu.png'
import { NavVariant, FadeIn } from '../motion/motion'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.div
      variants={NavVariant}
      initial="hidden"
      whileInView="show"
    >
      <nav className="flex justify-between items-center navbar">
        <p className='font_style-2 text-[26px] text-white ml-10 mt-10 cursor-pointer'>
          <span className='text-[#50F835]'>HUMAN</span>OIDS
          WO<span className='text-[#50F835]'>RLD
          </span></p>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-8 mr-10 mt-10 text-[26px] font_style-2">
          <li className='text-white cursor-pointer'><a href="#what">What?</a></li>
          <li className='text-white cursor-pointer'><a href="#howto">How?</a></li>
          <li className='text-white cursor-pointer'><a href="#why">Why?</a></li>
          <li className='text-[#ffffff] cursor-pointer'><a href="#connect"><button>Connect</button></a></li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain mr-10 mt-10 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            variants={FadeIn}
            initial="hidden"
            whileInView="show"
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-[#50F835] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col text-white font_style-2 text-[26px] ">
              <li className='hover:text-[#3C3D3C]'><a href="#what">What?</a></li>
              <li className='hover:text-[#3C3D3C]'><a href="#howto">How?</a></li>
              <li className='hover:text-[#3C3D3C]'><a href="#why">Why?</a></li>
              <li className='hover:text-[#3C3D3C]'><a href="#connect">Connect</a></li>
            </ul>
          </motion.div>
        </div>
      </nav>

    </motion.div >
  )
}

export default Navbar







