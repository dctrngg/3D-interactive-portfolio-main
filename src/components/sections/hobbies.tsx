"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import hobbies, { Hobby } from "@/data/hobbies";
import { cn } from "@/lib/utils";

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="max-w-7xl mx-auto py-16 px-4">
      <Link href="#hobbies">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl mb-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
          )}
        >
          Hobbies
        </h2>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.src} hobby={hobby} />
        ))}
      </div>
    </section>
  );
};

const HobbyCard = ({ hobby }: { hobby: Hobby }) => {
  return (
    <Modal>
      <ModalTrigger className="relative w-full aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer">
        <Image
          src={hobby.src}
          alt={hobby.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
          {hobby.title}
        </div>
      </ModalTrigger>

      <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
        <SmoothScroll isInsideModal={true}>
          <ModalContent>
            <HobbyContents hobby={hobby} />
          </ModalContent>
        </SmoothScroll>
        <ModalFooter className="gap-4">
          <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Close
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

const HobbyContents = ({ hobby }: { hobby: Hobby }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {hobby.title}
      </h4>

      {(hobby.skills?.frontend?.length || hobby.skills?.backend?.length) && (
        <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible mb-8">
          {hobby.skills?.frontend?.length > 0 && (
            <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-4">
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                Frontend
              </p>
              <FloatingDock items={hobby.skills.frontend} />
            </div>
          )}
          {hobby.skills?.backend?.length > 0 && (
            <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-4">
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                Backend
              </p>
              <FloatingDock items={hobby.skills.backend} />
            </div>
          )}
        </div>
      )}

      {hobby.content}
    </>
  );
};

export default HobbiesSection;
