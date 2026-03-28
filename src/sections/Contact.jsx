const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value,
  };

  try {
    const res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully 🚀");
    } else {
      alert("Something went wrong ❌");
    }

  } catch (error) {
    console.log(error);
    alert("Server error ❌");
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 text-center">

      {/* Heading */}
      <h2 className=" max-w-6xl mx-auto text-3xl md:text-4xl font-bold mb-6">
        Get In Touch
      </h2>

      <p className="text-gray-600 mb-10">
        Have a project in mind? Let’s build something amazing together.
      </p>

      {/* Form */}
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 border rounded-lg"
          ></textarea>

          <button className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Send Message
          </button>

        </form>
      </div>

      {/* OR Divider */}
      <div className="my-6 text-gray-500">OR</div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </a>

    </section>
  );
}