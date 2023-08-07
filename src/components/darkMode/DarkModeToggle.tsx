import React, { useContext } from "react";
import style from "./darkmode.module.css";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode }: any = useContext(ThemeContext);

  return (
    <div className={style.container} onClick={toggle}>
      <div className={style.icon}>&#127766;</div>
      <div className={style.icon}>&#127768;</div>
      <div
        className={style.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
