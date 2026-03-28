export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white to-gray-100 ">

      {/* Heading */}
      <h1 className=" max-w-6xl mx-auto text-4xl md:text-6xl font-bold text-black leading-tight">
        We Build Modern Websites That Grow Your Business
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
        Affordable, fast, and SEO-friendly websites designed to help your business stand out online.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
          Get Free Consultation
        </button>

        <button className="border border-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
          View Portfolio
        </button>
      </div>

    </section>
  );
}