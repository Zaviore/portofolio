import telkom from "../../public/kantor.jpg";
import freelance from "../../public/zam.jpg";

import Image from "next/image";
export const experience = [
  {
    logo: (
      <Image
        src={freelance}
        alt='logo-telkom'
        width='300px'
        height='300px'
        className='relative rounded-full'
      />
    ),
    color: "#B1DAFF",
    color2: "#62A8E8",
    title: "Freelancer Game",
    date: "september 2019 - february 2020",
    company: "Freelancer",
    desc:
      "I made a game based on a request from a client. I sometimes make 3d or 2d games. I got this job from a freelancer site",
  },
  {
    logo: (
      <Image
        src={telkom}
        alt='logo-telkom'
        width='300px'
        height='300px'
        className='relative rounded-full'
      />
    ),
    color: "#FFDDE0",
    color2: "#AF1C29",
    title: "Web Developer",
    date: "Agustus 2020 - present",
    company: "Telkom Indonesia",
    desc:
      "PT Telkom Indonesia (Persero) Tbk (Telkom) is a State-Owned Enterprise (BUMN) which is engaged in information and communication technology (ICT) services and telecommunications networks in Indonesia.",
  },
];
