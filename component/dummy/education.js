import intern from "../../public/djp.png";
import db from "../../public/Dumbways.png";
import stmik from "../../public/stmik.png";

import Image from "next/image";

export const education = [
  {
    logo: <Image src={db} alt='stmik' width='70px' height='60px' />,
    name: "Dumbways Bootcamp",
    jurusan: "Fullstack Developer",
    date: "february 2014 -juni 2019",
    desc: "Learn and study",
    skill: [
      { name: "create RESTFULL API" },
      { name: "Learn mysql database" },
      { name: "create Website using React" },
      { name: "interating APi to frontend" },
    ],
  },
  {
    logo: <Image src={intern} alt='stmik' width='50px' height='80px' />,
    name: "Intership",
    jurusan: "Do office work",
    date: "april 2013 - mei 2013",
    desc: "Learn and study",
    skill: [{ name: "Create excel table" }, { name: "management data" }],
  },
  {
    logo: <Image src={stmik} alt='stmik' width='80px' height='100px' />,
    name: "STMIK-AMIK -RIAU",
    jurusan: "Teknik informatika",
    date: "february 2014 -juni 2019",
    desc: "Learn and study",
    skill: [
      { name: "learn basic university lessons " },
      { name: "study programing" },
    ],
  },
];
