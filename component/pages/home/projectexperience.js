import React from "react";
import { project } from "../../dummy/project";

function Projectexperience() {
  return (
    <div className='bg-cs-purple-dark min-h-[800px]'>
      <div className='text-center text-white font-bold p-6 text-3xl'>
        Project Experience
      </div>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid md:grid-cols-3 gap-12 p-5'>
          {project.map((itm) => (
            <div className='bg-white p-5 rounded-2xl'>
              <div className='rounded-2xl '>{itm.icon}</div>
              <div className='text-center p-2'>
                <a
                  href={itm.url}
                  target='_blank'
                  className='p-2 bg-cs-purple-dark rounded-2xl text-white'
                >
                  visit webiste
                </a>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projectexperience;
