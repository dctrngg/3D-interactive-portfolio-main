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
  { // 01 Tofu
    category: "Collection",
    title: "Artisan",
    src: "/assets/projects-screenshots/keebs/artisans/01.jpg",
    screenshots: ["1.png", "02.png", "03.png","04.png","05.png","06.png","07.png"],
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
 
];

export default hobbies;
