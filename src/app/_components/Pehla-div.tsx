"use client"
import { Component } from 'react';
import { Button } from "@/components/ui/button";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Typing from 'react-typing-effect';

class Pehladiv extends Component {
  render() {
    return (
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start px-4 md:px-10 lg:px-0">
        <div className="shadow-lg p-5 h-[250px] mt-20 lg:mt-[70px] w-full lg:w-[450px] text-center lg:text-left">
          <div className="flex flex-col ">
            <div className="relative inline-block">
              <h1 className="text-3xl font-bold tracking-widest relative z-10 fade-in">Make The Best</h1>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-lg blur-md opacity-70" style={{ zIndex: -1 }}></div>
            </div>
            <div className="relative inline-block mt-2">
              <Typing
                className="text-3xl font-bold tracking-widest relative z-10"
                text="Financial Decisions"
                typingDelay={150}
                eraseDelay={20}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 rounded-lg blur-md opacity-70" style={{ zIndex: -1 }}></div>
            </div>
          </div>
          <p className="mt-2 lg:mt-[20px] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic labore ratione inventore!
          </p>
          <div className="flex flex-col sm:flex-row mt-1 lg:mt-[15px] items-center gap-5">
            <Button className="">Getting Started --></Button>
            <div className="flex gap-1 items-center">
              <VideoIcon />
              <h1 className="text-1xl font-semibold">Watch Video</h1>
            </div>
          </div>
          <div className="mt-[36px] h-[100px]">
            <Image src="/d.svg" width={350} height={1} alt="Image 3" />
          </div>
        </div>
        <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[300px] h-[500px] md:h-[500px] lg:h-[500px]">
          <div className="absolute top-20 left-10 md:top-24 md:left-24 lg:top-20 lg:left-40 w-full h-full object-cover">
            <div className="relative z-10">
              <Image src="/c.svg" width={400} height={20} alt="Image 3" />
            </div>
          </div>
          <div className="absolute top-8 left-5 md:top-10 md:left-10 lg:top-8 lg:left-20 w-full h-full object-cover">
            <div className="relative z-20">
              <Image src="/b.svg" width={500} height={80} alt="Image 2" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full object-cover">
            <div className="relative z-30">
              <Image src="/a.svg" width={500} height={80} alt="Image 1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pehladiv;
