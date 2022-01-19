import js from "../../public/js.png";
import node from "../../public/node.png";
import git from "../../public/git.png";
import github from "../../public/sql.png";
import mui from "../../public/mui.png";
import tailwind from "../../public/tailwind.png";
import scss from "../../public/scss.png";
import html5 from "../../public/html5.png";
import react from "../../public/react.png";
import ts from "../../public/ts.png";
import next from "../../public/next.png";
import bs from "../../public/bootstrap.png";
import Redux from "../../public/Redux.png";

import Image from "next/image";
export const skill = [
  { name: "JavaScript", icon: <Image src={js} /> },
  { name: "typescript", icon: <Image src={ts} /> },
  { name: "Node js", icon: <Image src={node} /> },
  { name: "git", icon: <Image src={git} /> },
  { name: "MySql", icon: <Image src={github} /> },
  { name: "mui", icon: <Image src={mui} /> },
  { name: "tailwind", icon: <Image src={tailwind} /> },
  { name: "sccs", icon: <Image src={scss} /> },
  { name: "html5", icon: <Image src={html5} /> },
  { name: "react", icon: <Image src={react} /> },
  { name: "Redux", icon: <Image src={Redux} /> },
  { name: "nextjs", icon: <Image src={next} /> },
  { name: "bootstap", icon: <Image src={bs} /> },
];
