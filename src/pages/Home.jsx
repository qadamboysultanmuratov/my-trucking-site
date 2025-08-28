import ServiceCard from '../components/ServiceCard';
import truckImage from '../assets/images/truck.jpg';

function Home() {
  return (
    <div>
      <header className="bg-blue-800 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Driving the Future of Green Logistics</h1>
        <p className="mt-4">Committed to sustainable and reliable transportation solutions.</p>
      </header>

      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Government Contracting"
            description="Efficient and compliant transportation services for government agencies."
            icon={truckImage}
          />
          <ServiceCard
            title="Amazon Certified Carrier"
            description="Fast and secure transportation solutions for Amazon's logistics needs."
            icon={truckImage}
          />
          <ServiceCard
            title="US Mail Carrier"
            description="Dependable and secure mail transport services."
            icon={truckImage}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
