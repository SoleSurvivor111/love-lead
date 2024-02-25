import React, { ReactElement } from "react";
import Carousel from "nuka-carousel";

interface ISliderProps {
  children: ReactElement[];
}

export const Slider: React.FC<ISliderProps> = ({ children }) => {
  return <Carousel>{children}</Carousel>;
};
