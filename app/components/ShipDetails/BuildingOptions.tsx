"use client";
import React, { useState } from "react";

const BuildingOptions = () => {
  const [bpoME, setBpoME] = useState<string>("0");
  const [location, setLocation] = useState<string>("Highsec");
  const [citadel, setCitadel] = useState<string>("Athanor");
  const [citRigs, setCitRigs] = useState<string>("0");

  return (
    <>
      <div className={`text-center`}>
        <fieldset>
          <legend className={`text-green-400 font-bold mb-1`}>
            BPO ME(Material Efficiency)
          </legend>
          <select name="me" id="me" className={`mb-5 text-black`}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <legend className={`text-green-400 font-bold mb-1`}>
            Where are you building?
          </legend>
          <select name="loc" className={`mb-5 text-black`}>
            <option value="hs">Highsec</option>
            <option value="ls">Lowsec</option>
            <option value="ns">Nullsec / Wormhole</option>
          </select>
          <legend className={`text-green-400 font-bold mb-1`}>
            Type of Citadel
          </legend>
          <select className={`mb-5 text-black`}>
            <option value="Athanor">Athanor</option>
            <option value="Tatara">Tatara</option>
            <option value="Raitaru">Raitaru</option>
            <option value="Azbel">Azbel</option>
            <option value="Sotiyo">Sotiyo</option>
            <option value="Astrahus">Astrahus</option>
            <option value="Fortizar">Fortizar</option>
            <option value="Keepstar">Keepstar</option>
          </select>
          <legend className={`text-green-400 font-bold mb-1`}>
            Citadel Rig
          </legend>
          <select className={`mb-5 text-black`}>
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
          </select>
        </fieldset>
      </div>
    </>
  );
};

export default BuildingOptions;
