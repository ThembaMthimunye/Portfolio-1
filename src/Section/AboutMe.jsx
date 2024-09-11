import React from "react";

const CV = () => {
  return (
    <div className="my-10 p-6 max-w-5xl mx-auto bg-[#161618] rounded-lg shadow-lg my-auto">
      <header className="text-center mb-6 text-white">
        <h1 className="text-3xl font-bold my-5">Nicolas Themba Mthimunye</h1>
        <p className="text-lg my-5 font-bold">Tech Enthusiast</p>
        <p className="my-5 text-red-500 underline">
          218634567@tut4life.ac.za | 0786490983
        </p>
      </header>

      <section className="mb-6 mt-20">
        <h2 className="text-2xl font-semibold text-red-500 text-center my-10">
          Experience
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border-2 rounded-md text-white bg-black shadow-lg border-black">
            <h3 className="text-xl font-semibold">Junior Software Developer</h3>
            <p>Ekhonnector Systems</p>
            <p className="text-red-500">Jan 2023 - May 2023</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Developed and maintained web applications using HTML and CSS.</li>
              <li>Collaborated with UX/UI designers to create responsive layouts.</li>
            </ul>
          </div>

          <div className="p-6 border-2 rounded-md text-white bg-black shadow-lg border-black">
            <h3 className="text-xl font-semibold">Field Support Engineer</h3>
            <p>Technovera Systems</p>
            <p className="text-red-500">Jun 2023 - Jul 2024</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Provided training and assistance to IT technicians and help desk staff.</li>
              <li>Monitored daily performance of systems.</li>
            </ul>
          </div>

          <div className="p-6 border-2 rounded-md text-white bg-black shadow-lg border-black">
            <h3 className="text-xl font-semibold">Junior Software Developer</h3>
            <p>Tshimologong (Wits)</p>
            <p className="text-red-500">Jul 2024 - Present</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Developed and maintained web applications using React.</li>
              <li>Collaborated with UX/UI designers to create responsive layouts.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <section className="text-white text-center p-6 border-2 rounded-md bg-black shadow-lg border-black w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 text-red-500">Education</h2>
          <div>
            <h3 className=" font-semibold">Information Technology : Intelligence Industrial Systems</h3>
            <p>Tshwane University of Technology | Graduated: 2023</p>
          </div>
        </section>

        <section className="text-white text-center p-6 border-2 rounded-md bg-black shadow-lg border-black w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 text-red-500">Skills</h2>
          <ul className="\ pl-5">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CV;
