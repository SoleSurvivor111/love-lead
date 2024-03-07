import React from "react";
import { Header } from "@views/header";
import { ScrollUpBtn } from "@components/scroll-up-btn";

import * as s from "./styles.module.sass";

interface ILayoutProps {
  children: any;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={s.root}>
      <Header />
      <main>{children}</main>
      <ScrollUpBtn />
    </div>
  );
};
