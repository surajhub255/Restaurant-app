import { IoFastFood } from 'react-icons/io5'
import { categories } from '../utils/data'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import RowContainer from './RowContainer'

const MenuContainer = () => {
  const [filter, setFilter] = useState('Chicken')
  const [{ foodItems }, dispatch] = useStateValue()
  // console.log('Food Items in Menu Container: ', foodItems)

  return (
    <>
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className=" block text-2xl text-headingColor font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto ">
            Our Hot Dishes
          </p>
        </div>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category?.id}
                className={`${
                  filter.toLowerCase() === category.urlParamName.toLowerCase()
                    ? 'bg-red-600'
                    : 'bg-card'
                } group w-24 min-2-[94px] h-28 cursor pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center  hover:bg-red-600 cursor-pointer`}
                onClick={() => {
                  setFilter(category.urlParamName)
                }}
              >
                <div
                  className={`shadow-lg ${
                    filter.toLowerCase() === category.urlParamName.toLowerCase()
                      ? 'bg-white'
                      : 'bg-red-600'
                  } w-10 h-10 rounded-full group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={` group-hover:text-red-600 ${
                      filter.toLowerCase() ===
                      category.urlParamName.toLowerCase()
                        ? 'text-red-600'
                        : 'text-white'
                    }`}
                  />
                </div>
                <p
                  className={`text-sm group-hover:text-white ${
                    filter.toLowerCase() === category.urlParamName.toLowerCase()
                      ? 'text-white'
                      : 'text-textColor'
                  }`}
                >
                  {category?.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w-full ">
          <RowContainer flag={false} data={foodItems?.filter(item => item.category.toLowerCase() === filter.toLowerCase())} />
         </div>
      </section>
    </>
  )
}

export default MenuContainer
