import React from "react";
import Image from "next/image";
import { experience } from "../../dummy/work";

function Experience() {
  return (
    <div id='experience'>
      <p className='text-center font-bold text-4xl pt-28 text-cs-primary'>
        Work Experience
      </p>{" "}
      <p className='text-center font-bold text-sm text-cs-gray'>
        Daftar pengalaman kerja yang pernah berkerja sama dengan saya
      </p>{" "}
      <div className=''> &nbsp;</div>
      <div className='container mx-auto max-w-5xl py-20 relative'>
        <div className='space place-content-around flex-wrap flex-col'>
          {experience.map((itm, index) => (
            <div className='relative flex w-full border-dashed lg:border-2 lg:border-cs-primary rounded-full m-4 flex-col-reverse lg:flex-row'>
              <div className='relative flex justify-center'>
                <div
                  style={{ width: 300, height: 300 }}
                  className='relative flex justify-center bg-cs-primary outline outline-4 outline-offset-0 outline-cs-primary mr-10 rounded-md lg:rounded-full'
                >
                  <div className='relative bg-white w-full lg:rounded-full'>
                    {itm.logo}
                  </div>
                </div>
              </div>
              <div className='pt-7 pr-4 pl-4 pb-16 lg:pl-0 lg:pb-0'>
                <div className='font-bold text-3xl text-cs-github'>
                  {itm.company}
                </div>
                <div className='py-3 text-2xl text-cs-gray'>{itm.title}</div>
                <div className='py-3'>{itm.date}</div>

                <div>{itm.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
