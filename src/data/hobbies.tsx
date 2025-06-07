import AceTernityLogo from "../components/logos/aceternity";
import SlideShow from "../components/slide-show";
import { Button } from "../components/ui/button";
import { TypographyH3, TypographyP } from "../components/ui/typography";
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
            Rooted in tradition and driven by creativity, the world of artisan craftsmanship celebrates the beauty of handmade artistry. From woodworking and pottery to textiles and leatherwork, each piece reflects a deep respect for materials, technique, and cultural heritage. Artisan crafts offer a unique connection between maker and object, blending timeless skills with personal expression. Whether showcased at local markets or global exhibitions, these handcrafted creations bring warmth, authenticity, and a human touch to everyday life, enriching our appreciation for slow, intentional design.
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
            Crafted with precision and a minimalist aesthetic, the Tofu keyboard stands out as a favorite among mechanical keyboard enthusiasts. Its solid aluminum case offers a premium feel and durable structure, while the clean lines and compact layout enhance both form and function. Designed for customization, the Tofu supports a variety of layouts, switch types, and keycap sets, making it an ideal choice for both typing comfort and personal expression. Whether for work or play, the Tofu delivers a satisfying, tactile experience that blends style, performance, and individuality.
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
 
  { // 04 acr59
    category: "Keebs",
    title: "Akko Acr59",
    src: "/assets/projects-screenshots/keebs/acr59/03.jpg",
   screenshots: ["01.jpg", "02.jpg", "03.jpg","04.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
Engineered with high-end enthusiasts in mind, the E7-V2 is a premium mechanical keyboard that combines refined aesthetics with uncompromising performance. Featuring a seamless 7u top mount design, robust aluminum construction, and a sleek, balanced layout, it delivers an exceptional typing experience for both casual and professional users. With support for custom PCB configurations, gasket mounting options, and advanced sound tuning, the E7-V2 offers versatility and sophistication in every keystroke. It's more than just a keyboard—it's a carefully crafted tool for those who value precision, feel, and timeless design.          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/acr59/01.jpg`,
              `${BASE_PATH}/acr59/02.jpg`,
              `${BASE_PATH}/acr59/03.jpg`,
              `${BASE_PATH}/acr59/04.jpg`,
            ]}
          />
        </div>
      );
    },
  },
  { // 05 alice
    category: "Keebs",
    title: "Aclice",
    src: "/assets/projects-screenshots/keebs/alice/01.jpg",
   screenshots: ["01.jpg", "02.jpg", "03.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Blending ergonomic comfort with elegant design, the Fpring Alice is a standout in the world of mechanical keyboards. Its signature split layout promotes a natural typing posture, reducing strain while maintaining a sleek and modern silhouette. Built with high-quality materials and a focus on acoustics, the Fpring Alice delivers a soft, satisfying sound profile and smooth keystrokes. Highly customizable with support for various switches, keycaps, and mounting styles, it caters to both aesthetic and performance-driven preferences. The Fpring Alice isn’t just a keyboard—it’s a refined experience crafted for everyday comfort and creative expression.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/alice/01.jpg`,
              `${BASE_PATH}/alice/02.jpg`,
              `${BASE_PATH}/alice/03.jpg`,
            ]}
          />
        </div>
      );
    },
  },

  { // 06 lucky
    category: "Keebs",
    title: "Lucky65",
    src: "/assets/projects-screenshots/keebs/lucky/02.jpg",
   screenshots: ["01.jpg", "02.jpg", "03.jpg","04.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Compact yet full of character, the Lucky65 is a 65% mechanical keyboard that strikes the perfect balance between functionality and form. With its sleek aluminum case, seamless top design, and refined weight distribution, it delivers a premium typing experience in a minimalist footprint. The layout retains essential keys while optimizing space, making it ideal for both work and play. Featuring customizable PCB support, flexible mounting styles, and carefully tuned acoustics, the Lucky65 appeals to enthusiasts who value precision, style, and personalization. It's a thoughtfully crafted board that brings everyday joy with every keystroke.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/lucky/01.jpg`,
              `${BASE_PATH}/lucky/02.jpg`,
              `${BASE_PATH}/lucky/03.jpg`,
              `${BASE_PATH}/lucky/04.jpg`,
              
              
            ]}
          />
        </div>
      );
    },
  },

  { // 07
    category: "Keebs",
    title: "Transition Lite",
    src: "/assets/projects-screenshots/keebs/trans/01.jpg",
   screenshots: ["01.jpg", "02.jpg", "03.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Designed for versatility and refined aesthetics, the Transition Lite offers a streamlined entry into the world of custom mechanical keyboards. With its clean, low-profile silhouette and balanced layout, it provides an intuitive typing experience that feels both responsive and smooth. The keyboard features a high-quality aluminum case, flexible mounting options, and a sound signature that’s crisp yet controlled—making it ideal for both daily productivity and enthusiast-level satisfaction. Lightweight yet solid, the Transition Lite embodies simplicity without compromise, serving as a perfect starting point for those who value both design and performance.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/trans/01.jpg`,
              `${BASE_PATH}/trans/02.jpg`,
              `${BASE_PATH}/trans/03.jpg`,  
            ]}
          />
        </div>
      );
    },
  },
 
 
];

export default hobbies;
