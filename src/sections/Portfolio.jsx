export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-100 text-center">

      {/* Heading */}
      <h2 className="max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-12">
        Our Work
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Project 1 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            <span>Restaurant Website</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Foodie Delight</h3>
            <p className="text-gray-600 text-sm">
              Modern restaurant website with online menu and booking.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            <span>Gym Website</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">PowerFit Gym</h3>
            <p className="text-gray-600 text-sm">
              Fitness website with membership plans and trainer profiles.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <div className="h-40 bg-gray-300 flex items-center justify-center">
            <span>Real Estate</span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Dream Homes</h3>
            <p className="text-gray-600 text-sm">
              Property listing platform with modern UI and search features.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}