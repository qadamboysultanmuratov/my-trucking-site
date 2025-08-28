import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

// Carousel settings
const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Covers most phones
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const team = [
  {
    name: "Abdul Qurbanov ",
    role: "Owner",
    phones: ["(215) 966-1144 x101"],
    email: "abdul@acktransinc.com",
    gender: "male",
  },
  {
    name: "Simon Pirnazarov",
    role: "Operations manager",
    phones: ["(215) 966-1144"],
    email: "simon@acktransinc.com",
    gender: "male",
  },
  {
    name: "Oscar Reis",
    role: "Dispatcher",
    phones: ["(215) 966-1144 x102", "(215) 987-4273"],
    email: "oscar@acktransinc.com",
    gender: "male",
  },
  {
    name: "Adam Sultan",
    role: "Dispatcher and IT",
    phones: ["(215) 966-1144 x104", "(215) 987-4830"],
    email: "adam@acktransinc.com",
    gender: "male",
  },
  {
    name: "Jason Davis",
    role: "Dispatcher",
    phones: ["(215) 966-1144 x103", "(215) 987-4912"],
    email: "jason@acktransinc.com",
    gender: "male",
  },
  {
    name: "James White",
    role: "Dispatcher",
    phones: ["(215) 966-1144 x105", "(215) 780-8002"],
    email: "james@acktransinc.com",
    gender: "male",
  },
  {
    name: "Bob Smith",
    role: "Dispatcher",
    phones: ["(215) 966-1144 x107", "(215) 966-1757"],
    email: "dispatchack@gmail.com",
    gender: "male",
  },
  {
    name: "Jon Neal",
    role: "Dispatcher",
    phones: ["(215) 966-1144 x106"],
    email: "jon@acktransinc.com",
    gender: "male",
  },
  {
    name: "Zee Mamatova",
    role: "Billing specialist",
    phones: ["(215) 966-1144"],
    email: "acktransinc@gmail.com",
    gender: "female",
  },
  {
    name: "Parviz Sultanov",
    role: "Safety Manager",
    phones: ["(215) 966-1144"],
    email: "acktransinc@gmail.com",
    gender: "male",
  },
];

export default function Team() {
  const cardRefs = useRef([]);
  const [minHeight, setMinHeight] = useState(0);

  useEffect(() => {
    if (cardRefs.current.length) {
      const heights = cardRefs.current.map((el) => el?.offsetHeight || 0);
      const max = Math.max(...heights);
      setMinHeight(max);
    }
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-x-hidden" id="team">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Meet Our Team
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our dedicated professionals work hard to keep your business moving.
        </p>

        <Slider {...settings}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full px-2 box-border"
            >
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ minHeight: minHeight ? `${minHeight}px` : "auto" }}
                className="w-full sm:max-w-md mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
              >
                <User
                  className={`w-12 h-12 mx-auto mb-6 ${
                    member.gender === "female" ? "text-red-500" : "text-blue-600"
                  }`}
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <div className="space-y-2 text-gray-600">
                  {member.phones.map((phone, i) => (
                    <p key={i} className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      {phone}
                    </p>
                  ))}
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    {member.email}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
