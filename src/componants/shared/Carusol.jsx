import { useEffect, useState } from "react";

const Carusol = () => {
  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="carousel w-full h-[175px] lg:h-[300px] relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item absolute w-full h-full ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          } transition-opacity duration-700`}
        >
          <img
            src={image}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
                )
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
              }
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carusol;
