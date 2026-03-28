export default function Navbar() {
  return ( 
    <nav className = "flex justify-between items-center px-8 py-4 bg-white shadow-md ">

      <h1 className="text-2xl font-bold text-black">PixelForge</h1>

<ul className="hidden md:flex gap-8 text-gray-700 font-medium">
  <li><a href="#home">Home</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

      <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-800 transition ">
        Get Quote
      </button>
      
    </nav>
  );
}