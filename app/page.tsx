import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center h-screen text-center max-w-5xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I’m Will 👋
        </h1>

        <p className="text-xl text-gray-600 max-w-xl">
          I’m a student developer who enjoys building apps and learning how real products are made.
        </p>
      </section>
      <section className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 py-24" id="projects">
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
      <section className="flex flex-col items-center max-w-5xl mx-auto px-6 py-24" id="about">
        <h1 className="text-3xl font-bold mb-10 text-center">
          About
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed text-left">
          I’m a Computer Science student at James Madison University who enjoys building practical applications and learning how real software systems are designed. 
          I have experience with Java, Python, and web technologies through academic projects focused on problem-solving, data structures, and full-stack development.
        </p>
        <br />
        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed text-left">
          I’ve worked on both individual and team-based projects using Agile practices, and I value writing clean, reliable code. 
          I’m currently seeking a computer science internship where I can apply my skills, continue learning, and gain hands-on industry experience.
        </p>
      </section>
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">
          Contacts
        </h2>

        <div className="w-full max-w-md border rounded-xl p-6 flex flex-col gap-4 text-center">
          <a
            href="https://linkedin.com/in/will-upright-1314053b1"
            target="_blank"
            className="text-blue-600 font-medium hover:underline"
          >
            LinkedIn
          </a>

          <p className="text-gray-700">
            w.e.upright@gmail.com
          </p>

          <p className="text-gray-700">
            (240) 585-0743
          </p>
        </div>
      </section>
    </main>
  );
}
