import { ReactComponent as ArrowLeftIcon } from '@assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from '@assets/icons/arrow-right.svg'
import Carousel from 'nuka-carousel'
import React, { ReactElement } from 'react'

interface ISliderProps {
  children: ReactElement[]
}

export const Slider: React.FC<ISliderProps> = ({ children }) => {
  return (
    <Carousel
      renderCenterLeftControls={({ previousSlide }) => (
        <ArrowLeftIcon
          onClick={() => previousSlide()}
          style={{ cursor: 'pointer' }}
        />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <ArrowRightIcon
          onClick={() => nextSlide()}
          style={{ cursor: 'pointer' }}
        />
      )}
    >
      {children}
    </Carousel>
  )
}
