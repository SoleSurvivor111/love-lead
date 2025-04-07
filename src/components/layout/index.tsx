import React from 'react'

import { ScrollUpBtn } from '@components/scroll-up-btn'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { Header } from '@views/header'

import { MobileHeader } from '@views/mobile-header'

import clsx from 'clsx'
import * as s from './styles.module.sass'

interface ILayoutProps {
  children: any
}

export const Layout = ({ children }: ILayoutProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={clsx(s.root, { mobile: isMobile })}>
      {!isMobile ? <Header /> : <MobileHeader />}
      <main>{children}</main>
      <ScrollUpBtn />
    </div>
  )
}
