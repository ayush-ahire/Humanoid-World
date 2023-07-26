import { motion } from 'framer-motion'
import Humanoid4 from '../../public/assets/humanoid-4.png'
import Humanoid5 from '../../public/assets/humanoid-5.png'
import Humanoid6 from '../../public/assets/humanoid-6.png'
import { FadeIn, NavVariant, rotateVariant } from '../motion/motion'

const Why = () => {
  return (
    <>
 
      <motion.div
      id='why'
        variants={NavVariant}
        initial='hidden'
        whileInView='show'
        className='font_style-2 mt-4 flex justify-center items-center text-white lg:text-[78px] sm: text-[48px] sm:ml-10 ml-8 relative z-10 '>
        <h1>Why Become a <span className='text-[#50F835]'>  Humanoid?</span></h1>

      </motion.div>
      <motion.div className='flex lg:flex-row sm: flex-col justify-between items-center p-5 '

      >
        <motion.div
          variants={rotateVariant('left')}
          initial='hidden'
          whileInView='show'
          className='lg:h-[400px] lg:w-[390px] sm: w-[290px] sm: h-[300px] bg-white rounded-[20px] sm: mb-5 blur-effect flex items-center justify-center'>
          <div className="flex flex-col justify-center items-center">
            <img src={Humanoid4} alt="humanoid 4" className='rounded-full mt-3' />
            <h4 className='font_styles-2 lg:text-[32px] sm: text-[16px] text-white text-center'>Unique Rare and Limited Edition</h4>
          </div>
        </motion.div>
        <motion.div variants={FadeIn(1)}
          initial='hidden'
          whileInView='show' className='lg:h-[400px] lg:w-[390px] sm: w-[290px] sm: h-[300px] bg-white rounded-[20px] sm: mb-5 blur-effect flex items-center justify-center' >

          <div className="flex flex-col justify-center items-center">
            <img src={Humanoid5} alt="humanoid 4" className='rounded-full mt-3' />
            <h4 className='font_styles-2 lg:text-[32px] sm: text-[16px] text-white text-center'>Free Entry for events & parties</h4>
          </div>
        </motion.div>
        <motion.div variants={rotateVariant('right')}
          initial='hidden'
          whileInView='show' className='lg:h-[400px] lg:w-[390px] sm: w-[290px] sm: h-[300px] bg-white rounded-[20px] sm: mb-5 blur-effect flex items-center justify-center' >
          <div className="flex flex-col justify-center items-center">
            <img src={Humanoid6} alt="humanoid 4" className='rounded-full mt-3' />
            <h4 className='font_styles-2 lg:text-[32px] sm: text-[16px] text-white text-center'>Potential for Investment and Future Value</h4>

          </div>
        </motion.div>
      </motion.div>
     
    </>
  )
}

export default Why