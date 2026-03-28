export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center">

      {/* Logo */}
      <h2 className="text-2xl font-bold mb-4">StackMinds</h2>

      {/* Links */}
      <div className="flex justify-center gap-6 mb-4 text-gray-300">
        <span className="hover:text-white cursor-pointer">Home</span>
        <span className="hover:text-white cursor-pointer">Services</span>
        <span className="hover:text-white cursor-pointer">Portfolio</span>
        <span className="hover:text-white cursor-pointer">Contact</span>
      </div>

      {/* Text */}
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} StackMinds. All rights reserved.
      </p>

    </footer>
  );
}