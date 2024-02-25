import React, { useEffect, useRef } from "react";

import * as s from "./styles.module.sass";
import { Section } from "@components/section";

export const Report = () => {
  const telegramPostRef = useRef<HTMLDivElement>(null);
  const telegramCommentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const src = "https://telegram.org/js/telegram-widget.js?22";
    //init telegram post and comments
    const scriptPostElement = document.createElement("script");
    scriptPostElement.src = src;
    scriptPostElement.setAttribute(
      "data-telegram-post",
      "loveleadcoaching/584"
    );
    scriptPostElement.setAttribute("data-size", "large");
    scriptPostElement.setAttribute("data-color", "#5C5698");

    scriptPostElement.async = true;

    telegramPostRef.current?.appendChild(scriptPostElement);

    const scriptCommentsElement = document.createElement("script");
    scriptCommentsElement.src = src;
    scriptCommentsElement.setAttribute(
      "data-telegram-discussion",
      "loveleadcoaching/584"
    );
    scriptCommentsElement.setAttribute("data-limit", "5");
    scriptCommentsElement.setAttribute("data-height", "300");
    scriptCommentsElement.setAttribute("data-colorful", "1");
    scriptCommentsElement.setAttribute("data-color", "#5C5698");
    scriptCommentsElement.async = true;
    telegramCommentsRef.current?.appendChild(scriptCommentsElement);
  }, []);
  return (
    <Section rootClassName={s.root} contentClassName={s.content}>
      <>
        <h1 className={s.title}>Отчет месяца</h1>
        <div className={s.postBox}>
          <div className={s.postContent}>
            <div className={s.post}>
              <div ref={telegramPostRef} />
            </div>
            <div className={s.comments}>
              <div ref={telegramCommentsRef} />
            </div>
          </div>
        </div>
      </>
    </Section>
  );
};
