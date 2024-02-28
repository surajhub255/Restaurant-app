import React, { useEffect, useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from './context/StateProvider'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()

  const [scrollValue, setScrollValue] = useState(0)
  // useEffect(() => {
    

  // }, [scrollValue, cartShow])
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl text-headingColor font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              className="w-8 h-8  rounded-lg bg-orange-300 hover:bg-orange-500 flex items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
              whileTap={{ scale: 0.75 }}
            >
              <MdChevronLeft
                className="text-lg text-white"
                onClick={() => setScrollValue(-200)}
              />
            </motion.div>

            <motion.div
              className=" flex w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 items-center justify-center cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg"
              whileTap={{ scale: 0.75 }}
            >
              <MdChevronRight
                className="text-lg text-white"
                onClick={() => setScrollValue(200)}
              />
            </motion.div>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((item) => item?.category === 'Fruits')}
        />
      </section>

      <MenuContainer />

{
  cartShow && <CartContainer />

}
    </div>
  )
}

export default MainContainer
