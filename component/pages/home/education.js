import React from "react";
import { education } from "../../dummy/education";
import Image from "next/image";
import circle from "../../../public/elipse.png";
import bg from "../../../public/bg.svg";

function EducationSelection() {
  return (
    <div className='relative container mx-auto max-w-full flex justify-center mt-24'>
      <div>
        <div className='m-12'>
          <div className='text-center font-bold text-4xl text-cs-primary '>
            Education
          </div>
          <div className='text-center text-sm text-cs-gray'>
            berikut beberapa pendidikan berserta pelatihan yang pernah saya
            ikuti
          </div>
        </div>

        <div className='relative'>
          <div className='absolute mt-[-50px] ml-[-60px] -z-30 '>
            <Image src={circle} alt='' width='200px' height='200px' />
          </div>
          <div className='absolute right-[-100px] bottom-0 mt-12 z-10'>
            <Image src={bg} width='500px' height='300px' />
          </div>
          <div className='min-h-[600px] max-w-7xl shadow-lg bg-white p-12 rounded-3xl '>
            {" "}
            <div className='grid grid-cols-3 relative'>
              {education.map((itm, idx) => (
                <div className='p-5'>
                  <div style={{ transform: "translate(15px, -30px)" }}>
                    <div className='p-6 px-16 md:min-w-[86%] bg-cs-primary rounded-xl text-white'>
                      <div className='w-28 h-28 bg-white flex items-center justify-center rounded-full shadow ml-12'>
                        <div className=''>{itm.logo}</div>
                      </div>
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
    </div>
  );
}

export default EducationSelection;
