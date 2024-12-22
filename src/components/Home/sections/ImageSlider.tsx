"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const images: { url: string; rounded: string; borderColor: string }[] = [
    {
      url: "image1.jpg",
      rounded: "rounded-full",
      borderColor: "border-violet-200",
    },
    {
      url: "image2.jpg",
      rounded: "rounded-lg",
      borderColor: "border-orange-100",
    },
    {
      url: "image3.jpg",
      rounded: "rounded-3xl",
      borderColor: "border-green-800",
    },
    {
      url: "image4.jpg",
      rounded: "rounded-full",
      borderColor: "border-orange-700",
    },
    {
      url: "image5.jpg",
      rounded: "rounded-3xl",
      borderColor: "border-blue-600",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-3 outline-none ralative">
            <Image
              width={740}
              height={827}
              src={`/images/${image.url}`}
              alt={`Slide ${index + 1}`}
              className={`w-full h-[300px] object-cover ${image.rounded} ${image.borderColor} border-[15px] `}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
