import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import { DiscordIcon } from "@components/Ui/svg/DiscordIcon";

const Footer = () => {
  return (
    <div className={`container flex justify-between mb-10`}>
      <div>
        <span className={`text-green-400 font-bold`}>Biscuits Industrial</span>.
        Proper Footer will be created at some point. Maybe.. tee hee :D
      </div>

      <div className={style.img}>
        <Image
          src="/BiscuityBotIcon.png"
          width={20}
          height={20}
          alt="Biscuits Industrial"
        />
        <a href="https://discord.gg/9eZvHRrh" title="Join our Discord!">
          <DiscordIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
