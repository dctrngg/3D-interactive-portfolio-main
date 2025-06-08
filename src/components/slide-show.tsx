import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const SlideShow = ({ images }: { images: string[] }) => {
  return (
    <Splide
      options={{
        autoplay: true,
        perPage: 1,
        start: 0,
        rewind: true,
        padding: { left: "3rem", right: "3rem" },
        gap: "1rem",
      }}
      hasTrack={false}
      className="w-full max-w-4xl mx-auto"
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={`screenshot-${idx}`}
              fill
              className="rounded-lg object-cover"
            />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};

export default SlideShow;
