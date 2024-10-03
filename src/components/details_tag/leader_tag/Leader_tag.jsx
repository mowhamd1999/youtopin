import React from 'react'
import style from './leader_tag.module.css'
const Leader_tag = ({details}) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>تور لیدر:</h3>
      <div className={style.info}>
        <div className={style.name}>
            <p className={style.p}>نام:</p>
            <span className={style.span}>{details.tourguide}</span>
        </div>
        <div className={style.description}>
            <p className={style.p}>زبان:</p>
            <span className={style.span}>{details.languages_spoken}</span>
        </div>
      </div>
    </div>
  )
}

export default Leader_tag
