export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg">Will</span>

        <div className="flex gap-6 text-sm">
          <a href="#projects" className="text-gray-600 hover:text-black">
            Projects
          </a>
          <a href="#about" className="text-gray-600 hover:text-black">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}