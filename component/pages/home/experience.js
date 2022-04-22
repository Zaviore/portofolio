import React from "react";
import Image from "next/image";
import { experience } from "../../dummy/work";

function Experience() {
  return (
    <div>
      <p className='text-center font-bold text-4xl pt-28 text-cs-primary'>
        Work Experience
      </p>{" "}
      <p className='text-center font-bold text-sm text-cs-gray'>
        Daftar pengalaman kerja yang pernah berkerja sama dengan saya
      </p>{" "}
      <div className=''> &nbsp;</div>
      <div className='container mx-auto max-w-5xl py-20 relative'>
        <div className='space place-content-around flex-wrap '>
          {experience.map((itm, index) => (
            <div className='relative flex w-full border-dashed border-2 border-cs-primary rounded-full m-4'>
              <div className='relative'>
                <div
                  style={{ width: 300, height: 300 }}
                  className='relative flex justify-center bg-cs-primary outline outline-4 outline-offset-0 outline-cs-primary mr-10 rounded-full'
                >
                  <div className='relative bg-white w-full rounded-full'>
                    {itm.logo}
                  </div>
                </div>
              </div>
              <div className='pt-7 pr-4'>
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
