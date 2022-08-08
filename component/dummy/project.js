import js from "../../public/corona.png";
import landexpres from "../../public/landexpress.png";
import picaso from "../../public/picaso.png";
import picaso2 from "../../public/picaso2.png";
import picaso3 from "../../public/facepage.png";
import picaso4 from "../../public/solution.png";

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

  {
    name: "Facepad",
    icon: <Image src={picaso} />,
    url: "https://facepad.picaso.id/",
    desc: "facerecognition technology for identyfication Employe or guest",
  },
  {
    name: "picaso",
    icon: <Image src={picaso2} />,
    url: "https://picaso.id/",
    desc: "landing page for company product",
  },
  {
    name: "facerecogniton landing",
    icon: <Image src={picaso3} />,
    url: "https://fr.picaso.id/",
    desc: "landing page for company product",
  },
  {
    name: "solution OCR",
    icon: <Image src={picaso4} />,
    url: "https://solution.picaso.id/",
    desc: "dashboard dukcapil by ktp and ijazah",
  },
  ,
];
