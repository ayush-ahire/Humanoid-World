import { Nfts } from '../source/index'
import { motion } from 'framer-motion'
import { slideInLeft, slideInRight } from '../motion/motion'
const Glance = () => {
  return (
    <motion.div className='flex lg:flex-row sm: flex-col justify-center items-center mt-5'>

      <motion.div variants={slideInLeft}
        initial='hidden'
        whileInView='show'
        className='font_style-2 mt-4 flex justify-center items-center text-white lg:text-[78px] sm: text-[48px] sm:ml-10 ml-8 lg:min-w-[50%] sm: min-w-[10%] text-start'
      >
        <h1>Take a Glance Into <span className='text-[#50F835]'>Humanoid World</span></h1>
      </motion.div>

      <motion.div
        variants={slideInRight}
        initial='hidden'
        whileInView='show'
        className=" m-10 sm: h-[60vh] lg:h-[80vh] carousel carousel-center max-w-md p-4 space-x-4 blur-effect rounded-box">
        {Nfts.map((nft) => (
          <div key={nft.id} className="carousel-item">
            <img src={nft.imgUrl} className="rounded-box " alt={nft.title} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Glance




