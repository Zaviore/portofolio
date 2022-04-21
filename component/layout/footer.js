import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className='max-w-full -mt-10 bottom-0 text-white '>
      <div className='bg-cs-footer  md:p-20 rounded-t-3xl '>
        <div className='grid md:grid-cols-12'>
          <div className='md:col-span-4'>
            <div className='px-5'>
              <div className='py-3'>
                <h1 className='text-3xl font-bold '>Our Office</h1>
              </div>
              <p>zamhadi21@gmail.com</p>
              <p className='md:mr-32 mt-4'>jl. Pakujaya Permai, serpong.</p>
              <p>Tanggerang selatan</p>
            </div>
          </div>

          <div className='md:col-span-4 '>
            <div className='px-5'>
              <div className='py-3'>
                <h1 className='text-3xl font-bold '>
                  What We Can Assist You With ?
                </h1>
                <p>(you can send some question here.)</p>
              </div>

              <div className='flex'>
                <div className='w-full'>
                  <div>
                    <input placeholder='nama' className='my-1 p-2 w-full' />
                  </div>
                  <div>
                    <input placeholder='email' className='my-1 p-2 w-full' />
                  </div>
                  <div>
                    <textarea
                      className='my-1 w-full p-2'
                      placeholder='Message'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:col-span-3'>
            <div className='px-5'>
              {" "}
              <div className='py-3'>
                <h1 className='text-3xl font-bold '>Keep Connected</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
