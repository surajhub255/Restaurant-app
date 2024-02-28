import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateContainer, Header, MainContainer } from './components'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './components/context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { data } from 'autoprefixer'
import { actionType } from './components/context/reducer'

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue()

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      // console.log('food items data : ', data)
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }

  useEffect(() => {
    fetchData()
    return;
  }, [])
  return (
    <AnimatePresence mode="wait">
      {/*  exitBeforeEnter */}

      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-24 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
