import Image from "next/image";

const symptoms = [
  {
    title: "Changing your posture",
    img: "/one1.png",
  },
  {
    title: "Having sex (both during and after)",
    img: "/two2.png",
  },
  {
    title: "Standing for a long time",
    img: "/three.png",
  },
  {
    title: "Walking",
    img: "/three.png",
  },
];

const expect = [
  {
    title: "Pain before or during their periods",
    img: "/one1.png",
  },
  {
    title: "Feeling a sudden need to urinate",
    img: "/two2.png",
  },
  {
    title: "Enlarged and distorted veins on the buttocks, external genitals (vulva), or thighs",
    img: "/three.png",
  },
];

export default function Candidate() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Top Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
          <h2 className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
            +
          </h2>
          <span className="text-[#111111] font-normal">Symptoms</span>
        </div>

        {/* Heading */}
        <h5 className="text-3xl text-black md:text-4xl pt-7 mb-4">
          Who is at risk for{" "}
          <span className="text-[#0E58A8] font-bold">
            pelvic congestion syndrome?
          </span>
        </h5>

        <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
          You may have a higher risk for pelvic congestion syndrome if you have
          given birth to more than one child. You may also have a higher risk if
          other members of your family have it.
        </p>

        <h4 className="text-2xl md:text-3xl text-black font-semibold pt-7 mb-4">
          What are the symptoms of pelvic congestion syndrome?
        </h4>

        <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-sm md:text-base">
          The main symptom of pelvic congestion syndrome is pelvic pain that
          lasts at least 6 months. This pain often first starts during or after a
          pregnancy. It may worsen after a later pregnancy. The pain may be a
          heavy or aching feeling. Or the pain may be sharp. Usually the pain is
          only on one side, usually the left side. At times you may feel it on
          both sides. The pain is often worse at the end of the day.
        </p>

        <h4 className="text-2xl md:text-3xl text-black font-semibold pt-14 mb-6">
          Certain factors may make the pain worse, such as:
        </h4>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {symptoms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Expect Section */}
        <h4 className="text-2xl md:text-3xl text-black font-semibold pt-14 mb-6">
         Some women also have symptoms such as:
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {expect.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-[#0E58A8] hover:bg-[#0c4c91] text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
          <a href="#form">   Book Appointment</a>
          </button>
        </div>

      </div>
    </section>
  );
}
