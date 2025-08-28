function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mr-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
