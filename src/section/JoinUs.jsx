import { motion } from 'framer-motion'
import { FadeIn, slideInLeft } from '../motion/motion'
import { logos } from '../source/index'

const JoinUs = () => {
  return (
    <motion.div
    id='connect'
    className='mt-10 flex flex-col justify-center items-center'>
      <motion.h1 variants={slideInLeft}
        initial='hidden'
        whileInView='show'
        className='text-white lg:text-[120px] sm: text-[68px] font_style-2 flex text-center p-5'
      >
        Join<span className='text-[#50F835]'>&nbsp;Us&nbsp;</span> Now
      </motion.h1>
      <motion.div

      >

        <div className='grid sm: grid-cols-2 lg:grid-cols-4'>
          {
            logos.map((logo) => (
              <motion.div
                variants={FadeIn}
                initial='hidden'
                whileInView='show'
                key={logo.id}>
                <motion.img
                  initial={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}

                  src={logo.imgUrl} className='w-[200px] h-[200px]' alt="social logo" />
              </motion.div>


            ))}



        </div>
      </motion.div>

    </motion.div>
  )
}

export default JoinUs