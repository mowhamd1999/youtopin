import React, { useEffect } from 'react'
import style from './Main.module.css'
import fetchAPI from './../../Redux/TourReducer/tourAction'
import SliderSwiper from '../../components/sliderSwiper/SliderSwiper'
import { useDispatch , useSelector } from 'react-redux'
const Main = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.toursState)
  useEffect(() => {
    if(!state.tours.length) dispatch(fetchAPI())
  },[])
  console.log(state)
  return (
    <div>
      <SliderSwiper />
    </div>
  )
}

export default Main
