import Image from "next/image";

const symptoms = [
  { title: "Curvature of the spine (scoliosis)", img: "/one1.png" },
  { title: "Enlargement or deformity of a finger", img: "/two2.png" },
  { title: "Joint pain and stiffness", img: "/three.png" },
  { title: "Limping", img: "/four.png" },
];

export default function FibroidSymptomsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full text-[26px] font-bold text-[#0E58A8]">
            +
          </span>
          <span className="text-[#111111] font-normal">Symptoms</span>
        </div>

        {/* Heading */}
        <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
          What are the symptoms{" "}
          <span className="text-[#0E58A8] font-bold">of an osteoid osteoma?</span>
        </h5>

        <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
          The most common symptom of an osteoid osteoma is pain not caused by an injury. The pain is often achy and dull.
          The pain can be intense. It often tends to get worse at night. It may even wake you from sleep. Over-the-counter
          pain medicines, such as aspirin or ibuprofen, may help ease your pain. Depending on the location, other signs
          and symptoms can include:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {symptoms.map((item, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-xl shadow-xl hover:shadow-md transition duration-300 p-4"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>

              <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-[#0E58A8] hover:bg-[#0B4C92] text-white px-8 py-3 rounded-full shadow-xl transition">
          <a href="#form">   Book Appointment</a>
          </button>
        </div>
      </div>
    </section>
  );
}
