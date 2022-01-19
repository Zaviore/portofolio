import React, { useState, useRef } from "react";
import { skill } from "../../dummy/skill";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

function Skillselection() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <div>
      <p className='text-center text-3xl font-bold mb-5 underline underline-offset-8 '>
        Skill
      </p>

      <div className=' bg-cs-purple-dark text-white '>
        <div className='overflow-x-auto flex flex-rows text-center mx-auto max-w-7xl'>
          <button
            className={
              scrollX !== 0
                ? " md:m-5 p-2 transition delay-150 shadow rounded-full "
                : " md:m-5 p-2 transition delay-150 shadow rounded-full invisible "
            }
            onClick={() => slide(-150)}
          >
            <div className='font-bold text-black'>
              <ChevronLeftIcon className='h-5 w-5 text-white' />
            </div>
          </button>

          <ul
            ref={scrl}
            onScroll={scrollCheck}
            className='snap-x scroll-smooth'
          >
            {" "}
            {skill.map((itm) => (
              <li className='py-2 md:px-3 min-w-[100px] text-center mr-20 mt-5 snap-center'>
                <div>{itm.name}</div>
                <div>{itm.icon}</div>
              </li>
            ))}
          </ul>

          <button
            className={
              !scrolEnd
                ? "md:m-5 p-2 shadow rounded-full"
                : "md:m-5 p-2 shadow bg-white rounded-full invisible "
            }
            onClick={() => slide(+100)}
          >
            <div className='font-bold text-black'>
              <ChevronRightIcon className='h-5 w-5 text-white' />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skillselection;
