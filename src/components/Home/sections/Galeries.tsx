import React from "react";
import ImageSlider from "./ImageSlider";

const Galeries = () => {
  return (
    <div className="py-8">
      <h3 className="text-black text-4xl font-bold text-center">Galerie</h3>
      <p className="text-gray-600 sm:container mx-auto">
        Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
        nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut.
        Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum
        scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus
        iaculis.
      </p>
      <ImageSlider />
    </div>
  );
};

export default Galeries;
