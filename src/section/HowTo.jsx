import { motion } from 'framer-motion'
import Humanoid3 from '../../public/assets/humanoid-3.png'
import boat from '../../public/assets/boat1.gif'
import wallet from '../../public/assets/wallet.gif'
import buy from '../../public/assets/buy.gif'
import { staggerContainer, slideInLeft, slideInRight } from '../motion/motion'
const HowTo = () => {
  return (
    <motion.div
      className='lg:mt-[160px] sm: mt-10  flex justify-center h-[100vh] relative z-10` ' id='howto'>
      <motion.div variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        className='flex lg:flex-row flex-col justify-between lg:p-5 w-[90%] items-center gap-5 h-[80vh] '>

        <motion.div variants={slideInLeft}
          initial='hidden'
          whileInView='show'
          className='p-0'
        >
          <img src={Humanoid3} alt="humanoid2" className='object-contain w-full h-full lg:mt-6' />
        </motion.div>
        <motion.div variants={slideInRight}
          initial='hidden'
          whileInView='show'
          className=' lg:max-w-[50%] sm:max-w-[70%] p-3 '>
          <h1 className='text-white font_style-2 sm: text-[34px] lg:text-[64px] '><span className='text-[#50F835]'>How To Buy</span> Humanoid?</h1>
          <div className=' flex flex-col justify-center items-start flex-auto font_style-1 text-white '>
            <div className='flex flex-row justify-center items-center text-[22px]'>
              <img src={boat} alt="boat img" className='w-[100px] h-[100px]' />
              <h6>visit the opensea.io website</h6>
            </div>
            <div className='flex flex-row justify-center items-center text-[22px]'>
              <img src={wallet} alt="boat img" className='w-[100px] h-[100px]' />
              <h6>connect your wallet to opensea</h6>
            </div>
            <div className='flex flex-row justify-center items-center text-[22px]'>
              <img src={buy} alt="boat img" className='w-[100px] h-[100px]' />
              <h6>visit Humanoid NFTs collcetion page </h6>
            </div>
              <button>
                Get One 🏹
              </button>

          </div>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default HowTo
