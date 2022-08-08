import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Logo from "../../public/logo-panjang.png";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [pathHastag, setPathHastag] = useState("");
  const { pathname, events } = useRouter();

  useEffect(() => {
    const onHashChangeStart = (url) => {
      setPathHastag(url);
    };
    events.on("hashChangeStart", onHashChangeStart);
    return () => {
      events.off("hashChangeStart", onHashChangeStart);
    };
  }, [events]);
  return (
    <Popover className='mx-auto fixed w-full bg-cs-primary z-50 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center py-2 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <a href='#'>
              <Image src={Logo} alt='logo' width='150px' height='50px' />{" "}
            </a>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            <a
              href='#about'
              className='text-base font-medium text-white hover:text-gray-900'
            >
              About
            </a>

            <a
              href='#skill'
              className='text-base font-medium text-white hover:text-gray-900'
            >
              Skill
            </a>
            <a
              href='#education'
              className='text-base font-medium text-white hover:text-gray-900'
            >
              Education
            </a>
            <a
              href='#experience'
              className='text-base font-medium text-white hover:text-gray-900'
            >
              Experience
            </a>

            <a
              href='#portopolo'
              className='text-base font-medium text-white hover:text-gray-900'
            >
              Portopolio
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-cs-primary divide-y-'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-cs-primary rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-900'
                  >
                    Home
                  </a>
                  <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-900'
                  >
                    About
                  </a>
                  <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-900'
                  >
                    Promotions
                  </a>
                  <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-900'
                  >
                    Blogs
                  </a>
                  <a
                    href='#'
                    className='text-base font-medium text-white hover:text-gray-900'
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            </div>
            <div className='py-2 px-5 space-y-6'>
              <div>
                <a
                  href='#'
                  className='w-full flex items-cente  r justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cs-green hover:bg-cs-green-light'
                >
                  Sign up
                </a>
                <p className='mt-6 text-center text-base font-medium text-white'>
                  Existing customer?{" "}
                  <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
