import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Site from "../component/layout/site";
import Heroselection from "../component/pages/home/heroselection";
import Skillselection from "../component/pages/home/skillselection";
import Experience from "../component/pages/home/experience";
import EducationSelection from "../component/pages/home/education";
import Projectexperience from "../component/pages/home/projectexperience";

export default function Home() {
  return (
    <div>
      {" "}
      <Head>
        <link href='https://unpkg.com/pattern.css' rel='stylesheet' />
      </Head>
      <Site>
        <Heroselection />
        <Skillselection />
        <EducationSelection />
        <Experience />
        <Projectexperience />
      </Site>
    </div>
  );
}
