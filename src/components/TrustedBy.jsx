import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// ✅ Hook to detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < breakpoint);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [breakpoint]);

  return isMobile;
}

function TrustedBy() {
  const logos = [
    "/images/brokers/broker1.webp",
    "/images/brokers/broker2.webp",
    "/images/brokers/broker3.webp",
    "/images/brokers/broker4.webp",
    "/images/brokers/broker5.webp",
    "/images/brokers/broker6.webp",
    "/images/brokers/broker7.webp",
    "/images/brokers/broker8.webp",
    "/images/brokers/broker9.webp",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const isMobile = useIsMobile(768); // ✅ hide on <768px screens

  // ✅ don’t render on mobile
  if (isMobile) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">
          We Are <span className="text-blue-600">Trusted By</span>
        </h2>

        <Slider {...settings}>
          {logos.map((logo, idx) => (
            <div key={idx} className="px-4">
              <img
                src={logo}
                alt={`Broker ${idx + 1}`}
                className="h-16 mx-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TrustedBy;
