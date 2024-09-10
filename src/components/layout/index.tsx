import React from "react";

import { Header } from "@views/header";
import { ScrollUpBtn } from "@components/scroll-up-btn";
import { useMediaQuery } from "@hooks/useMediaQuery";

import { MobileHeader } from "@views/mobile-header";

import * as s from "./styles.module.sass";
import clsx from "clsx";

interface ILayoutProps {
  children: any;
}

export const Layout = ({ children }: ILayoutProps) => {
  const isMobile = useMediaQuery("max-width: 768px");

  return (
    <div className={clsx(s.root, { mobile: isMobile })}>
      {!isMobile ? <Header /> : <MobileHeader />}
      <main>{children}</main>
      <ScrollUpBtn />
    </div>
  );
};
