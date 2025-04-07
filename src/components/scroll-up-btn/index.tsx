import React from 'react'

import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrow-up.svg'

import * as s from './styles.module.sass'

export const ScrollUpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button className={s.root} onClick={scrollToTop}>
      <ArrowUpIcon />
    </button>
  )
}
