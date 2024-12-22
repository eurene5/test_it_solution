import Image from "next/image";
import React from "react";
import {
  ArrowRightIcon,
  CpuChipIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import CategoryItem from "./CategoryItem";

const Card = ({ title, body }: Readonly<{ title: string; body: string }>) => {
  return (
    <div className="bg-orange-50 rounded-2xl flex flex-col p-3 gap-3 hover:shadow-2xl">
      <div className="relative">
        <Image
          src="/images/image1.jpg"
          alt="image 1"
          width={640}
          height={827}
          className="w-full h-auto rounded-2xl max-w-[350px] object-cover"
        />
        <div className="absolute top-2 left-2">
          <CategoryItem active={true}>
            <CpuChipIcon className="w-6 h-6" /> <span>Low Tech</span>
          </CategoryItem>
        </div>
      </div>
      <h5 className="text-orange-600 font-bold text-xl">{title}</h5>
      <p className="text-gray-500 font-light text-lg">{body}</p>
      <div className="text-black flex items-center space-x-2">
        <UsersIcon className="w-6 h-6" />
        <span>200 fermiers bénéficiaires</span>
      </div>
      <div className="flex space-x-2 flex-wrap">
        <a
          href="#"
          className="text-green-800 border py-1 border-green-800 px-3 rounded-full text-xs"
        >
          Cameroun
        </a>
        <a
          href="#"
          className="text-green-800 border py-1 border-green-800 px-3 rounded-full text-xs"
        >
          Forêt et biodiversité
        </a>
        <a
          href="#"
          className="text-green-800 border py-1 border-green-800 px-3 rounded-full text-xs"
        >
          Réalisé
        </a>
      </div>
      <a href="#" className="flex space-x-2 text-orange-600 font-bold">
        En savoir plus <ArrowRightIcon className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Card;
