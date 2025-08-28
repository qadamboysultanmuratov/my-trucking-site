import { Shield, Clock, Truck, Users } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Reliable & Secure",
      desc: "We prioritize safety and transparency so your cargo always arrives securely and on time.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "On-Time Delivery",
      desc: "Our advanced scheduling and tracking ensure consistent, punctual deliveries across North America.",
    },
    {
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      title: "Modern Fleet",
      desc: "With a well-maintained fleet of trucks, we handle shipments of any size with efficiency.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Customer Focused",
      desc: "We’re committed to personalized service, adapting to each client’s unique shipping needs.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Why Choose <span className="text-blue-600">ACK Trans Inc</span>?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
