"use client"
import Link from 'next/link';
import Apicall from './apicon'
import { useState } from 'react';
import NavBar from './NavBar';
import Image from "next/image";
import Columns from '@/components/columns'
import {ThemeToggle} from "@/components/theme-toggle"
import {ResizableDemo} from "./resize"




export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
    <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl text-cyan-600 font-bold ">PcariMovie</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="logo" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'p-12 md:p-0 block' : 'hidden'
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#statemanagement2" onClick={() => setNavbar(!navbar)}>
                  State Management 2
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#statemanagement1" onClick={() => setNavbar(!navbar)}>
                  State Management 1
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="#API" onClick={() => setNavbar(!navbar)}>
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
      <section id="statemanagement2" className=" text-white h-screen bg-purple-900 flex">

        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          State Management 2
          <ThemeToggle/>
        </h1>
        <section className='flex h-screen bg-gradient-to-br from-gray-700 to-gray-900 py-12 text-white'>
      <div className='mx-auto w-full max-w-7xl px-6'>
      </div>
    </section>
      </section>

      <section
        id="statemanagement1"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          State Management 1{' '}
        </h1>
        <Columns/>
      </section>
      <section
        id="API"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <Link href="news" target="_blank" className="m-auto font-waterfall text-7xl text-white font-bold"><h1>
          API
        </h1></Link>
      </section>
    </div>

  );
}
