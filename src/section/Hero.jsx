import { motion } from 'framer-motion'
import Humanoid1 from '../../public/assets/humanoid-1.png'
import { FadeIn, slideInLeft, slideInRight, staggerContainer } from '../motion/motion'


const Hero = () => {
  return (
    <motion.div variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      className='flex justify-center items-center flex-col'
    >
      <motion.h1
        variants={slideInLeft}
        initial="hidden"
        whileInView="show"
        className='font_style-1 flex justify-center lg:text-[58px] sm: text-[28px] md:text-[48px]   lg:tracking-[2rem] font-normal mt-4 text-white  '>
        <span className='text-[#50F835]'>WELCOME&nbsp;</span>TO THE
      </motion.h1>
      <motion.h1

        variants={slideInRight}
        initial="hidden"
        whileInView="show"
        className='font_style-1 flex justify-center sm: text-[28px] lg:text-[58px] md:text-[48px]   text-white lg:tracking-[2rem]  '>
        HUMANOID <span className='text-[#50F835]'>&nbsp;WORLD</span>
      </motion.h1>
      <motion.div variants={FadeIn(2)}
        initial='hiddeh'
        whileInView='show'
      ><img src={Humanoid1} alt="humanoid-1"
        className='flex justify-center items-center w-[572px] h-[516px] object-contain' /></motion.div>
    </motion.div >
  )
}

export default Hero
