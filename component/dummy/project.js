import js from "../../public/corona.png";
import landexpres from "../../public/landexpress.png";

import Image from "next/image";
export const project = [
  {
    name: "Corona Mapping",
    url: "https://corona19-rn.netlify.app/",
    icon: <Image src={js} />,
    desc:
      "this is website for mapping corona Virus data in the world, can be showing about death, infection, or recover from corona Virus",
  },
  {
    name: "LandExpress",
    icon: <Image src={landexpres} />,
    desc: "this is website for booking train ticket in speciali in our city",
  },

  ,
];
