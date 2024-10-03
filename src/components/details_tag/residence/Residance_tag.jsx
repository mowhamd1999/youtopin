import React from 'react'
import style from './residance_tag.module.css'
const Residance_tag = ({details}) => {
  return (
    <div className={style.container}>
        <h3 className={style.title}>اقامتگاه:</h3>
        <h4 className={style.h4}>{details.accommodation}</h4>
        <div className={style.info}>
            <div className={style.name}>
                <p className={style.p}>نام اقامتگاه: </p>
                <span className={style.span}>{details.hotel[0].name}</span>
            </div>
            <div className={style.description}>
                <p className={style.p}>توضیحات اقامتگاه: </p>
                <span className={style.span}>{details.hotel[1].description}</span>
            </div>
        </div>
    </div>
  )
}

export default Residance_tag
