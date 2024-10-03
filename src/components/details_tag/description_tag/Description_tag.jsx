import React from 'react'
import style from './description.module.css'
const Description_tag = ({details}) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>توضیحات تور:</h3>
      <div className={style.weather}>
        <p className={style.p}>آب و هوا:</p>
        <span className={style.span}>{details.weather_forecast}</span>
      </div>
      <div className={style.description}>
        <p className={style.p}>توضیحات:</p>
        <span className={style.span}>{details.description}</span>
      </div>
    </div>
  )
}

export default Description_tag
