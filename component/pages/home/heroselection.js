import Image from "next/image";
import React, { useRef } from "react";
import Banner from "../../../public/porto.png";
import effect from "../../../public/jojo.png";
import email from "../../../public/email.png";
import linkin from "../../../public/linkin-white.png";
import github from "../../../public/github-white.png";
import cloud from "../../../public/cloud.png";

function Heroselection() {
  const ref = useRef();
  return (
    <div>
      <div className='relative max-w-full content_bg'>
        <div className=''></div>
        <div className='max-w-7xl mx-auto px-4 md:grid grid-cols-2 gap-4 items-center sm:px-6'>
          <div className=''>
            <p className='text-white text-3xl font-bold'>Hi, My Name</p>
            <p className='text-white text-7xl font-bold'>Zamhadi</p>
            <p className='md:mr-56 text-white'>
              i'm frontend Developer, My job is Develop, improve, maintain, and
              publish high quality user-facing web. To Ensure apps that develop
              are cross-device compatible, adhere to our company-wide style
              guide, and matches the designed user experience and Doing test
              driven development.
            </p>
            <div className='flex items-center mt-2 mr-8 '>
              <a
                href='https://www.linkedin.com/in/zamhadi/'
                target='_blank'
                className='mr-2 whitespace-nowrap inline-flex items-center justify-center px-3 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-cs-linkedin hover:bg-gray-500'
              >
                <Image src={linkin} width='20px' height='20px' />
              </a>
              <a
                href='https://github.com/Zaviore'
                target='_blank'
                className='mr-2 whitespace-nowrap inline-flex items-center justify-center px-3 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-cs-github hover:bg-gray-500'
              >
                <Image src={github} width='20px' height='20px' />
              </a>
              <a
                href='mailto:zamhadi21@gmail.com'
                className='mr-2 whitespace-nowrap inline-flex items-center justify-center px-3 py-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-cs-email hover:bg-gray-500'
              >
                <Image src={email} width='20px' height='15px' />
              </a>
            </div>
            <div className='flex items-center mt-10 mr-8 '>
              <a
                href='https://drive.google.com/file/d/1MjEmASpUukPpQjMmvoFTBK4U4zcSUo6g/view'
                target='_blank'
                className='mr-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-cs-gray bg-white hover:bg-gray-500'
              >
                My Resume
              </a>
              <a
                href='https://api.whatsapp.com/send?phone=6281277060233'
                target='_blank'
                className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-500 hover:bg-gray-500'
              >
                hire me
              </a>
            </div>
          </div>
          <div className='relative mb-16'>
            <Image src={Banner} />
          </div>
        </div>
        <div className='bg-repeat-x h-8 w-full bg-contain'>
          <Image src={cloud} />
        </div>
      </div>
    </div>
  );
}

export default Heroselection;
