import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m Will 👋
        </h1>

        <p className="text-xl text-gray-600 max-w-xl">
          I’m a student developer who enjoys building apps and learning how real products are made.
        </p>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-20" id="projects">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-600 mb-4">
              A short description of what this app does and what problem it solves.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: React, Next.js, Tailwind
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-600 mb-4">
              A short description of what this app does and what problem it solves.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: React, Next.js, Tailwind
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:underline">
                Live Demo
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
