import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'
let items = []

const CartItem = ({ item, setFlag, flag }) => {
  const [qty, setQty] = useState(1)
  const [{ cartItem }, dispatch] = useStateValue()

  const cartDispatch = () => {
    localStorage.setItem('cartItems', JSON.stringify(items))
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItem: items,
    })
  }

  const updateItemQty = (action, id) => {
    if (action === 'add') {
      setQty((prevQty) => prevQty + 1)
      cartItem.map((item) => {
        if (item.id === id) {
          item.qty += 1
          setFlag((flag) => flag + 1)
        }
      })
      cartDispatch()
    } else {
      if (qty === 1) {
        items = cartItem.filter((item) => item.id !== id)
        setFlag((flag) => flag + 1)
        cartDispatch()
      } else {
        setQty((prevQty) => prevQty - 1)
        cartItem.map((item) => {
          if (item.id === id) {
            item.qty -= 1
            setFlag((flag) => flag + 1)
          }
        })
        cartDispatch()
      }
    }
  }

  useEffect(() => {
    items = cartItem
  }, [qty])

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={item?.imageURL}
        alt="cart item img"
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          ₹ {Number.parseFloat(item?.price * qty)}
        </p>
      </div>
      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateItemQty('removed', item?.id)}
        >
          <BiMinus className="text-gray-50" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {qty}
        </p>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateItemQty('add', item?.id)}
        >
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  )
}

export default CartItem
