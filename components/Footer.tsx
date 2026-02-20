export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <span> {new Date().getFullYear()} Will Upright</span>

        <div className="flex gap-4">
          <a
            href="https://github.com/willupright"
            className="hover:text-black"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/will-upright-1314053b1"
            className="hover:text-black"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="mailto:w.e.upright@gmail.com"
            className="hover:text-black"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}