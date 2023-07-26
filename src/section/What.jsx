import { motion } from 'framer-motion'
import Humanoid2 from '../../public/assets/humanoid-2.png'
import { slideInLeft, slideInRight, staggerContainer } from '../motion/motion'

const What = () => {
  return (
    <motion.div
    id='what'
      className='  lg:mt-[180px] sm: mt-[80px] flex justify-center z-10'>
      <motion.div variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        className='flex lg:flex-row flex-col justify-between lg:p-5 w-[90%] items-center gap-5 blur-effect h-[80vh] '>
        <motion.div variants={slideInLeft}
          initial='hidden'
          whileInView='show'
          className=' lg:max-w-[50%] sm:max-w-[70%] p-3 '>
          <h1 className='text-white font_style-2 sm: text-[34px] lg:text-[64px] '>What Are <span className='text-[#50F835]'>Humanoids?</span></h1>
          <p className='font_style-1 text-start text-white '>
            mi lorem magna turpis. Enim consequat ut sem justo. Nunc massa turpis nunc turpis. Lectus venenatis tortor a sagittis sapien. Felis sit sed ac et lectus egestas dignissim congue. Vestibulum iaculis vestibulum nisl </p>
        </motion.div>
        <motion.div variants={slideInRight}
          initial='hidden'
          whileInView='show'
          className='p-0'
        >
          <img src={Humanoid2} alt="humanoid2" className='object-contain w-full h-full lg:mt-6' />
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default What
