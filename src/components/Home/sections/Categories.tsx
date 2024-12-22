"use client";

import React, { ForwardRefExoticComponent, useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import { menu } from "../../../../public/categories.json";

// Exemple d'importation d'icônes Heroicons
import {
  HeartIcon,
  BoltIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import FilterCategory from "./FilterCategory";
import { fetchPosts, Post } from "@/services/posts";
import Card from "./Card";

const iconMap = {
  HeartIcon,
  BoltIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
};

const Categories = () => {
  const [data, setData] = useState<Post[] | []>([]);

  useEffect(() => {
    const getPosts = async () => {
      setData(await fetchPosts());
    };
    getPosts();
  }, []);
  return (
    <div className="py-7 space-y-6 md:container mx-auto justify-center">
      <h3 className="text-blue-950 text-4xl font-bold text-center">
        Catégories
      </h3>
      <div className="flex space-x-2 justify-center">
        {menu &&
          menu.map((item) => {
            const Icon = item.icon ? iconMap[item.icon] : ""; // Trouver l'icône dynamique
            return (
              <CategoryItem key={item.text} active={item.active}>
                {Icon && <Icon className="h-6 w-6" />} {/* Rendre l'icône */}
                <span>{item.text}</span>
              </CategoryItem>
            );
          })}
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex space-x-3">
          <FilterCategory
            label="Localisation"
            options={["Tous", "Togo", "Cameroun"]}
            selected="Tous"
          />
          <FilterCategory
            label="Agir Sur"
            selected="Forêt et biodiversité"
            options={["Tous", "Forêt et biodiversité", "Conditions de vie"]}
          />
          <FilterCategory
            label="Status"
            selected="En collecte"
            options={["Tous", "En collecte", "En déploiement", "Réalisé"]}
          />
        </div>
        <a
          href="#"
          className="text-gray-600 font-bold flex space-x-2 items-center"
        >
          <TrashIcon className="h-6 w-6" /> <span>Effacer les filtres</span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4">
          {data &&
            data.map((item, index) => {
              return <Card title={item.title} key={index} body={item.body} />;
            })}
        </div>
        <a
          href="#"
          className="mx-auto text-orange-600 bg-orange-50 border-2 border-orange-600 py-3 px-4 text-2xl font-bold rounded-full hover:text-orange-50  hover:bg-orange-600"
        >
          Voir plus
        </a>
      </div>
    </div>
  );
};

export default Categories;
