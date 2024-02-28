import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from './context/StateProvider'

const RowContainer = ({ flag, data, scrollValue, setScrollValue }) => {
  // console.log('Row Container Data: ', data)
  const scrollContainer = useRef()

  useEffect(() => {
    scrollContainer.current.scrollLeft += scrollValue
    return
  }, [scrollValue])

  const [{ cartItem }, dispatch] = useStateValue()
  const [items, setItems] = useState([cartItem])
  const addToCart = () => {
    dispatch({
      type: 'SET_CARTITEMS',
      cartItem: items,
    })
    localStorage.setItem('cartItems', JSON.stringify(items))
  }

  useEffect(() => {
    addToCart()
  }, [items])

  return (
    <>
      <div
        ref={scrollContainer}
        className={`bg-rowBg w-full my-12 flex items-center gap-5 scroll-smooth ${
          flag
            ? 'overflow-x-scroll scrollbar-none'
            : 'overflow-x-hidden flex-wrap justify-center'
        }`}
      >
        {/* {console.log('data: ', data)} */}
        {data?.length ? (
          data.map((item) => (
            <div
              key={item?.id}
              className="bg-cardOverlay  w-[275px] min-w-[275px] md:min-w-[300px]  rounded-lg py-2 px-4 md:w-300 drop-shadow-lg shadow-lg backdrop-blur-lg my-12 flex flex-col justify-center"
            >
              <div className="w-full flex items-center justify-between ">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                >
                  <img
                    src={item.imageURL}
                    alt=""
                    className=" w-full h-full object-contain"
                  />
                </motion.div>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 cursor-pointer hover:shadow-md flex items-center justify-center"
                  onClick={() => setItems([...cartItem, item])}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>
              <div className="w-full flex flex-col  items-end justify-end">
                <p className="text-textColor mt-1 text-base font-semibold md:text-lg">
                  {item?.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.calories} calories
                </p>
                <div className="flex items-center gap-4 ">
                  <p className="text-lg text-headingColor font-semibold ">
                    <span className="text-sm text-red-500">₹ </span>
                    {item?.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex items-center flex-col justify-center">
            <img src={NotFound} alt="NotFound" className="w-80 h-auto" />
            <p className="text-xl font-headingColor font-semibold my-2">
              Items not found
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default RowContainer
