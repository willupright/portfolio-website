import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-gray-900">
      <section className="flex flex-col items-center justify-center min-h-screen text-center max-w-5xl mx-auto px-6" id = "hero">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I’m Will 👋
        </h1>

        <p className="text-2xl text-gray-700 mb-6 max-w-3xl">
          Computer Science student focused on building practical, real-world applications
          using Java, Python, and modern web technologies.
        </p>

        <p className="text-lg text-gray-600 mb-10">
          Seeking a software engineering internship for Summer 2026.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/willupright"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            target="_blank"
          >
            Github
          </a>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 py-24" id="projects">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="flex flex-col gap-16 w-full items-center justify-center text-center">
          {/* Project 1 */}
          <div className="border rounded-xl p-8 hover:shadow-lg transition bg-white">
            <h3 className="text-2xl font-semibold mb-4">
              Virginia Flora & Fauna Database
            </h3>

            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              A full-stack biodiversity web application for storing and exploring species and
              observation data across Virginia. Built with Flask-AppBuilder and PostgreSQL,
              the platform enables users to browse species, apply filters, and
              submit new observations through a structured workflow.
              <br /><br />
              Live access is restricted due to university database permissions; screenshots
              demonstrate some of the user experience from search to data persistence.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Tech: Python, Flask-AppBuilder, PostgreSQL, HTML, CSS
            </p>
            <div className="flex gap-4 justify-center mb-6">
              <a
                href="https://github.com/willupright/virginia-fauna-and-flora"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-lg font-medium hover:bg-gray-100 transition"
              >
                View Code
              </a>
            </div>
            <div className="flex flex-col gap-2 w-full items-center justify-center text-center">
              <Image
                src="/projects/landing-page.png"
                width={1000}
                height={550}
                alt="Virginia Flora & Fauna Database Home Page"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                This is the website's landing page, which gives the user easy access to the search functionality with "START EXPLORING" and "SELECT YOUR COUNTY".
                As well as an easy way to submit a new observation for returning users with "... Add an Observation".
              </p>
              <Image
                src="/projects/species1.png"
                width={1000}
                height={550}
                alt="Virginia Flora & Fauna Database Species Page"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                When the user clicks "START EXPLORING", they are taken to this page, which shows all the species in the database. They can then search the database using the search button at the top left.
              </p>
              <Image
                src="/projects/species-search.png"
                width={1000}
                height={550}
                alt="Virginia Flora & Fauna Database Species Search View"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                The user can use many different filters to narrow down their search, such as "Common Name", "Scientific Name", "County", etc. For this example, I searched for species where their common name contains "White".
              </p>
              <Image
                src="/projects/search-result.png"
                width={2000}
                height={550}
                alt="Virginia Flora & Fauna Database Search Results"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                After clicking the search button, the data was queried and the results are displayed to the user.
              </p>
              <Image
                src="/projects/adding-observation.png"
                width={1000}
                height={550}
                alt="Virginia Flora & Fauna Database Adding Observation Form"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                This is the form returning users can use to submit a new observation. The user can fill out the form with the species they observed, the county they observed it in, etc. After submitting the form, the data is added to the database and can be searched for by other users.
              </p>
              <Image
                src="/projects/observation-confirmed.png"
                width={2000}
                height={550}
                alt="Virginia Flora & Fauna Database Observation Confirmed"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                Here you can see the observation was successfully added to the database and is now searchable by other users. The user can also click on the observation to view more details about it.
              </p>
              <Image
                src="/projects/diagram.png"
                width={2000}
                height={550}
                alt="Virginia Flora & Fauna Database ER Diagram"
                className="rounded-lg border-2 border-solid border-gray-300"
              />
              <p className="text-sm text-gray-500 mb-8">
                Here is the databases ER diagram, which shows the relationships between the different tables in the database.
              </p>
            </div>
          </div>


        </div>
      </section>
      <section className="flex flex-col items-center max-w-5xl mx-auto px-6 py-24" id="about">
        <h1 className="text-3xl font-bold mb-10 text-center">
          About
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed text-left">
          Computer Science student at James Madison University with experience in Java, Python, C, and full-stack web development. 
          Strong background in data structures, algorithms, and database systems, with hands-on project experience building web and data-driven applications.
        </p>
        <br />
        <p className="text-xl text-gray-600 max-w-4xl leading-relaxed text-left">
          I bring a strong work ethic, teamwork, and attention to detail from previous technical and customer-facing roles. 
          Currently seeking a software engineering or computer science internship to gain real-world experience and contribute to impactful software projects.
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
