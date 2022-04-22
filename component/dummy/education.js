import intern from "../../public/djp.png";
import dbss from "../../public/dumbways.png";
import stmik from "../../public/stmik.png";

import Image from "next/image";

export const education = [
  {
    logo: <Image src={dbss} alt='stmik' width='70px' height='60px' />,
    name: "Bootcamp",
    jurusan: "Fullstack Developer",
    date: "february 2014 -juni 2019",

    skill: [
      { name: "create RESTFULL API" },
      { name: "Learn mysql database" },
      { name: "create Website using React" },
      { name: "interating APi to frontend" },
    ],
  },
  {
    logo: <Image src={intern} alt='as' width='50px' height='80px' />,
    name: "Intership",
    jurusan: "Do office work",
    date: "april 2013 - mei 2013",

    skill: [
      { name: "Create excel table" },
      { name: "management data" },
      { name: "learning softskill" },
      { name: "learning responsibility" },
    ],
  },
  {
    logo: <Image src={stmik} alt='damn' width='80px' height='100px' />,
    name: "STMIK-AMIK -RIAU",
    jurusan: "Teknik informatika",
    date: "february 2014 -juni 2019",

    skill: [
      { name: "learning basic programming" },
      { name: "learn kotlin android" },
      { name: "Learn mysql database" },
      { name: "make website from php" },
    ],
  },
];
