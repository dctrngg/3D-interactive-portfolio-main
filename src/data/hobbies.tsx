import AceTernityLogo from "../components/logos/aceternity";
import SlideShow from "../components/slide-show";
import { Button } from "../components/ui/button";
import { TypographyH3, TypographyP } from "../components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots/keebs";

export type Hobby = {
  title: string;
  category: string;
  src: string;
  screenshots: string[];
  content: React.ReactNode;
};

const hobbies: Hobby[] = [
  {
    category: "Collection",
    title: "Artisan",
    src: `${BASE_PATH}/artisans/01.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Rooted in tradition and driven by creativity, the world of artisan craftsmanship celebrates the beauty of handmade artistry. From woodworking and pottery to textiles and leatherwork, each piece reflects a deep respect for materials, technique, and cultural heritage. Artisan crafts offer a unique connection between maker and object, blending timeless skills with personal expression. Whether showcased at local markets or global exhibitions, these handcrafted creations bring warmth, authenticity, and a human touch to everyday life.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/artisans/${img}`)}
          />
        </div>
      );
    }
  },
  {
    category: "Keebs",
    title: "Tofu",
    src: `${BASE_PATH}/tofu/01.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Crafted with precision and a minimalist aesthetic, the Tofu keyboard stands out as a favorite among mechanical keyboard enthusiasts. Its solid aluminum case offers a premium feel and durable structure, while the clean lines and compact layout enhance both form and function.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/tofu/${img}`)}
          />
        </div>
      );
    }
  },
  {
    category: "Keebs",
    title: "E7v2",
    src: `${BASE_PATH}/e7/01.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Engineered with high-end enthusiasts in mind, the E7-V2 is a premium mechanical keyboard that combines refined aesthetics with uncompromising performance. Featuring a seamless 7u top mount design, robust aluminum construction, and a sleek, balanced layout, it delivers an exceptional typing experience for both casual and professional users.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/e7/${img}`)}
          />
        </div>
      );
    }
  },
  {
    category: "Keebs",
    title: "Akko Acr59",
    src: `${BASE_PATH}/acr59/03.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            With a playful yet solid design, the Akko Acr59 keyboard brings vibrant aesthetics and smooth keystrokes together in a compact package. The acrylic case gives it a unique glow, while the gasket mount structure ensures comfortable typing. Whether you're a beginner or seasoned keeb enthusiast, this board blends fun and function in a budget-friendly design.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/acr59/${img}`)}
          />
        </div>
      );
    }
  },
  {
    category: "Keebs",
    title: "Alice",
    src: `${BASE_PATH}/alice/01.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Blending ergonomic comfort with elegant design, the Spring Alice is a standout in the world of mechanical keyboards. Its signature split layout promotes a natural typing posture, reducing strain while maintaining a sleek and modern silhouette.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/alice/${img}`)}
          />
        </div>
      );
    }
  },
  {
    category: "Keebs",
    title: "Lucky65",
    src: `${BASE_PATH}/lucky/02.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Compact yet full of character, the Lucky65 is a 65% mechanical keyboard that strikes the perfect balance between functionality and form. Its sleek aluminum case and seamless top design make it both portable and elegant.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/lucky/${img}`)}
          />
        </div>
      );
    }
  },
  {
    category: "Keebs",
    title: "Transition Lite",
    src: `${BASE_PATH}/trans/01.jpg`,
    screenshots: ["01.jpg", "02.jpg", "03.jpg"],
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Designed for versatility and refined aesthetics, the Transition Lite offers a streamlined entry into the world of custom mechanical keyboards. With its clean, low-profile silhouette and balanced layout, it provides an intuitive typing experience that feels both responsive and smooth.
          </TypographyP>
          <SlideShow
            images={this.screenshots.map((img) => `${BASE_PATH}/trans/${img}`)}
          />
        </div>
      );
    }
  }
];

export default hobbies;
