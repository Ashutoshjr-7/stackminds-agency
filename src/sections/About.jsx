export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white text-center">

      {/* Heading */}
      <h2 className=" max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-6">
        About StackMinds
      </h2>

      {/* Content */}
      <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
        At StackMinds, we help businesses grow by building modern, fast, and
        high-converting websites. Our goal is simple — create websites that not
        only look great but also bring real results.
      </p>

      {/* Points */}
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-8">

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">
            Get your website ready in just a few days.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Affordable Pricing</h3>
          <p className="text-gray-600 mt-2">
            High-quality websites at budget-friendly prices.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Modern Design</h3>
          <p className="text-gray-600 mt-2">
            Clean and professional designs that impress clients.
          </p>
        </div>

      </div>

    </section>
  );
}