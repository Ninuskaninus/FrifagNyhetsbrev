import React from "react";
import FriFagbevegelse from "../../assets/frifag.jpg";
import Rorsla from "../../assets/røsla.jpg";
import Utenriks from "../../assets/urix.jpg";
import MagForFag from "../../assets/magforfag.jpg";
import IndustriEnergi from "../../assets/industrienergi.jpg";
import HKNytt from "../../assets/hk-nytt.jpg";
import Arbeidsmanden from "../../assets/arbeidsmanden.jpg"
import Nettverk from "../../assets/nettverk.jpg";
import NTL from "../../assets/ntl.jpg";
import NNN from "../../assets/nnn.jpg";
import Fontene from "../../assets/fontene.jpg";
import NJF from "../../assets/njf.jpg";
import Posthornet from "../../assets/posthornet.jpg";
import LedelseOgTeknikk from "../../assets/ledelseogteknikk.jpg";
import Iskolen from "../../assets/iskolen.jpg";
import NFF from "../../assets/nff.jpg";
import LoAktuelt from "../../assets/loaktuelt.jpg";
import Lonnsoppgjør from "../../assets/lønnsoppgjør.jpg";
import Logo from "../../assets/frifag-white.png";

const Images = {
  Frifag: () => {
    return (
      <img src={FriFagbevegelse} alt="Frifagbevegelse" />
    );
  }, 

  Rorsla: () => {
    return (
      <img src={Rorsla} alt="Rørsla" />
    );
  },

  Utenriks: () => {
    return (
      <img src={Utenriks} alt="Utenriks" />
    );
  },

  MagForFag: () => {
    return (
      <img src={MagForFag} alt="MagForFag" />
    );
  },
  IndustriEnergi: () => {
    return (
      <img src={IndustriEnergi} alt="IndustriEnergi" />
    );
  },
  HKNytt: () => {
    return (
      <img src={HKNytt} alt="HKNytt" />
    );
  },
  Arbeidsmanden: () => {
    return (
      <img src={Arbeidsmanden} alt="Arbeidsmanden" />
    );
  },
  Nettverk: () => {
    return (
      <img src={Nettverk} alt="Nettverk" />
    );
  },
  NTL: () => {
    return (
      <img src={NTL} alt="NTL" />
    );
  },
  NNN: () => {
    return (
      <img src={NNN} alt="NNN" />
    );
  },
  Fontene: () => {
    return (
      <img src={Fontene} alt="Fontene" />
    );
  },
  NJF: () => {
    return (
      <img src={NJF} alt="NJF" />
    );
  },
  Posthornet: () => {
    return (
      <img src={Posthornet} alt="Posthornet" />
    );
  },
  LedelseOgTeknikk: () => {
    return (
      <img src={LedelseOgTeknikk} alt="LedelseOgTeknikk" />
    );
  },
  Iskolen: () => {
    return (
      <img src={Iskolen} alt="Iskolen" />
    );
  },
  NFF: () => {
    return (
      <img src={NFF} alt="NFF" />
    );
  },
  LoAktuelt: () => {
    return (
      <img src={LoAktuelt} alt="LoAktuelt" />
    );
  },
  Lonnsoppgjør: () => {
    return (
      <img src={Lonnsoppgjør} alt="Lønnsoppgjør" />
    );
  },

  Logo: () => {
    return (
      <img src={Logo} alt="Frifagbevegelse" />
    );
  }
}

export default Images;