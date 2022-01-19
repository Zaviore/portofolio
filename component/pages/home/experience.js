import React from "react";

import { experience } from "../../dummy/work";

function Experience() {
  return (
    <div>
      <p className='text-center font-bold text-3xl pt-20'>Work Experience</p>{" "}
      <div className='bg-step'> &nbsp;</div>
      <div className='container mx-auto max-w-7xl py-20 relative'>
        <div className='flex flex-row space place-content-around flex-wrap '>
          {experience.map((itm, index) => (
            <div className='relative py-4'>
              <div className=''>
                <div
                  className='min-h-[50px] rounded-t-3xl'
                  style={{ backgroundColor: itm.color2 }}
                >
                  &nbsp;
                </div>
                <div
                  style={{ backgroundColor: itm.color }}
                  className='absolute top-[-5px] ml-28 p-3 flex justify-center content-center rounded-full outline  outline-4 outline-white'
                >
                  {itm.logo}
                </div>
              </div>
              <div className='max-w-xs bg-slate-100 text-center min-h-[200px] pt-16 p-10 rounded-b-3xl ease-in-out duration-300 shadow hover:shadow-xl '>
                <div className='font-bold text-2xl underline'>
                  {itm.company}
                </div>
                <div className='py-3 text-2xl'>{itm.title}</div>
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
