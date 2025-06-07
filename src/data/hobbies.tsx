import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots/keebs";
export type Hobby = {
  title: string;
  category: string;
  src: string; // image path
  screenshots: string[];
  content: React.ReactNode;
};

const hobbies: Hobby[] = [
  { // 01 Artisan
    category: "Collection",
    title: "Artisan",
    src: "/assets/projects-screenshots/keebs/artisans/01.jpg",
    screenshots: ["01.jpg", "02.jpg", "03.jpg","04.jpg","05.jpg",],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed with world-class acoustics and contemporary architecture, the hall offers a premier experience for both artists and audiences. From classical symphonies and contemporary music to dance, theater, and local cultural events, Hung Vuong Concert Hall provides a versatile space that inspires creativity and connection. With advanced technical infrastructure and professional event services, it serves as a central hub for cultural enrichment, artistic collaboration, and unforgettable live experiences.t!
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/artisans/01.jpg`,
              `${BASE_PATH}/artisans/02.jpg`,
              `${BASE_PATH}/artisans/03.jpg`,
              `${BASE_PATH}/artisans/04.jpg`,
              `${BASE_PATH}/artisans/05.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02 Tofu
    category: "Keebs",
    title: "Tofu",
    src: "/assets/projects-screenshots/keebs/tofu/01.jpg",
   screenshots: ["01.jpg", "02.jpg", "03.jpg","04.jpg","05.jpg",],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed with world-class acoustics and contemporary architecture, the hall offers a premier experience for both artists and audiences. From classical symphonies and contemporary music to dance, theater, and local cultural events, Hung Vuong Concert Hall provides a versatile space that inspires creativity and connection. With advanced technical infrastructure and professional event services, it serves as a central hub for cultural enrichment, artistic collaboration, and unforgettable live experiences.t!
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/tofu/01.jpg`,
              `${BASE_PATH}/tofu/02.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 03 E7
    category: "Keebs",
    title: "E7v2",
    src: "/assets/projects-screenshots/keebs/e7/01.jpg",
   screenshots: ["01.jpg", "02.jpg", "03.jpg","04.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed with world-class acoustics and contemporary architecture, the hall offers a premier experience for both artists and audiences. From classical symphonies and contemporary music to dance, theater, and local cultural events, Hung Vuong Concert Hall provides a versatile space that inspires creativity and connection. With advanced technical infrastructure and professional event services, it serves as a central hub for cultural enrichment, artistic collaboration, and unforgettable live experiences.t!
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/e7/01.jpg`,
              `${BASE_PATH}/e7/02.jpg`,
              `${BASE_PATH}/e7/03.jpg`,
              `${BASE_PATH}/e7/04.jpg`,
            ]}
          />
        </div>
      );
    },
  },
 
 
];

export default hobbies;
