import React from "react";
import Slider from "react-slick";
import our1 from "@/assets/our1.jpg";
import our2 from "@/assets/our2.png";
import our3 from "@/assets/our3.png";
import our4 from "@/assets/our4.png";
import our5 from "@/assets/our5.png";
import our6 from "@/assets/our6.png";
import our7 from "@/assets/our7.jpg";

const products = [
  { img: our1, name: "Pillow Cover" },
  { img: our2, name: "Non woven Rolls" },
  { img: our3, name: "Loop Bag" },
  { img: our4, name: "Box Bag" },
  { img: our5, name: "Draw string Bag" },
  { img: our6, name: "Garbage Bag" },
  { img: our7, name: "Table Cloth" },
];

const ProductCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 6,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: false }, // disable centerMode for small screens
      },
    ],
  };

  return (
    <div className="w-full py-12 text-center bg-gray-50 overflow-x-hidden">
      <h2 className="text-2xl md:text-5xl mb-2 text-[#394D57]">
        Our Nonwoven Product Line
      </h2>
      <p className="text-xl md:text-5xl mb-8 text-[#394D57]">
        Explore Our Versatile Range of Customizable Solutions
      </p>

      <div className="overflow-x-hidden">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-1 w-full">
              <div>
                <img
                  src={product.img}
                  alt={product.name}
                  className="mx-auto w-40 md:w-48 lg:w-56 max-w-full"
                />
                <p className="mt-2 text-sm md:text-base">{product.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <button className="mt-6 inline-flex items-center border border-gray-400 px-4 py-2 rounded hover:bg-gray-100">
        Read More &rarr;
      </button>
    </div>
  );
};

export default ProductCarousel;
