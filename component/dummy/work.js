import telkom from "../../public/telkom.png";
import freelance from "../../public/freelancer.svg";

import Image from "next/image";
export const experience = [
  {
    logo: (
      <Image src={freelance} alt='logo-telkom' width='70px' height='70px' />
    ),
    color: "#B1DAFF",
    color2: "#62A8E8",
    title: "Freelancer Game",
    date: "september 2019 - february 2020",
    company: "Freelancer",
    desc: "make a game based on a request from a customer",
  },
  {
    logo: <Image src={telkom} alt='logo-telkom' width='70px' height='70px' />,
    color: "#FFDDE0",
    color2: "#AF1C29",
    title: "Web Developer",
    date: "Agustus 2020 - present",
    company: "Telkom Indonesia",
    desc:
      "PT Telkom Indonesia (Persero) Tbk (Telkom) is a State-Owned Enterprise (BUMN) which is engaged in information and communication technology (ICT) services and telecommunications networks in Indonesia.",
  },
];
