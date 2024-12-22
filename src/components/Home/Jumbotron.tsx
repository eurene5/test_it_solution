import Image from "next/image";
import React from "react";

const Jumbotron = () => {
  const textAnimate = "vous passionne";
  return (
    <div className="md:container mx-auto grid grid-cols-2 py-10 space-x-2 items-center">
      <div className="space-y-6 flex flex-col">
        <p className="text-5xl text-bold">Choisissez</p>
        <div className="text-5xl text-bold">un projet qui</div>
        <div className="text-5xl text-bold">{textAnimate}.</div>
        <p className="font-light text-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum est,
          quis, nihil ad voluptas laborum tempore dolore ipsam iste excepturi
          incidunt obcaecati maiores recusandae nobis, labore dolor quos. At,
          illum.
        </p>
        <a
          href="#"
          className="text-orange-500 bg-orange-50 hover:text-orange-50 hover:bg-orange-700 py-4 px-5 rounded-full text-3xl font-bold text-center"
        >
          En savoir plus sur l&apos;incubateur
        </a>
      </div>
      <div>
        <Image
          src="/images/image1.jpg"
          alt="image 1"
          width={640}
          height={827}
          className="w-full h-auto rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
