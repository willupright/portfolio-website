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
    </main>
  );
}
