export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white text-center">

      {/* Heading */}
      <h2 className="max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-12">
        Our Services
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">Business Websites</h3>
          <p className="text-gray-600">
            Professional websites to showcase your business and attract customers.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">E-commerce Stores</h3>
          <p className="text-gray-600">
            Sell your products online with modern and secure e-commerce solutions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
          <p className="text-gray-600">
            High-converting landing pages designed to generate leads and sales.
          </p>
        </div>

      </div>

    </section>
  );
}