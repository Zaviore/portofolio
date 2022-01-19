import React from "react";
import { education } from "../../dummy/education";
import Image from "next/image";
import circle from "../../../public/elipse.png";

function EducationSelection() {
  return (
    <div className='relative '>
      <div className='relative container mx-auto max-w-7xl'>
        <div>
          <div className='absolute mt-20 ml-[-60px] -z-30 '>
            <Image src={circle} alt='' width='200px' height='200px' />
          </div>

          <div className='pt-20 pb-8 font-bold text-3xl'>&nbsp;</div>
          <div className='grid grid-cols-1 min-h-[150px]  bg-cs-gray  p-12 rounded-3xl '>
            <div className='place-self-center md:place-self-end font-bold text-3xl text-cs-purple-dark'>
              Education
            </div>
            <div className='place-self-center md:place-self-end font-bold text-xl underline underline-offset-8 text-cs-purple-dark'>
              education and training{" "}
            </div>

            {education.map((itm, idx) => (
              <div
                className={
                  idx % 2 === 0
                    ? "md:place-self-start md:min-w-[600px] pt-5 pattern-dots-md gray-light my-5"
                    : "md:place-self-end md:min-w-[600px] pt-5 pattern-dots-md gray-light my-5"
                }
              >
                <div
                  className={`flex `}
                  style={{ transform: "translate(15px, -30px)" }}
                >
                  <div className='relative flex justify-around items-center min-w-[50px] min-h-[200px] px-8 border-r-2  bg-cs-purple-dark rounded-l-xl'>
                    <div className='absolute w-28 h-28 bg-white flex items-center justify-center rounded-full shadow ml-12'>
                      <div className=''>{itm.logo}</div>
                    </div>
                  </div>
                  <div className='p-6 px-16 md:min-w-[700px] bg-white rounded-r-xl'>
                    <div className='text-2xl'>{itm.name}</div>
                    <div>{itm.date}</div>
                    <div className='font-bold'>{itm.jurusan}</div>
                    <div>{itm.desc}</div>
                    <br />
                    <div>
                      {itm.skill.map((key) => (
                        <ul>
                          <span> &#9632; {key.name}</span>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSelection;
