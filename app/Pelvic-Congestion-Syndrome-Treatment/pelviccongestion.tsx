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
    title: "Heavy or painful menstrual periods",
    img: "/one1.png",
  },
  {
    title: "Sudden urgency to urinate",
    img: "/two2.png",
  },
  {
    title: "Enlarged, visible veins on the buttocks, vulva, or thighs",
    img: "/three.png",
  },
   {
    title: "Bloating and lower back pain",
    img: "/three.png",
  },
];

const Risk = [
  {
    title: "Have given birth to more than one child",
    img: "/one1.png",
  },
  {
    title: "Have a family history of PCS or pelvic varicose veins",
    img: "/two2.png",
  },
  {
    title: "Are of childbearing age (pre-menopausal)",
    img: "/three.png",
  },
  {
    title: (
      <>
        Have previously been diagnosed with{" "}
        <a
          href="/Uterine-Fibroid-Embolization"
          className="font-semibold text-[#0E58A8] underline underline-offset-4"
        >
          uterine fibroids
        </a>{" "}
        or{" "}
        <a
          href="/Endometriotic-Ovarian-Cyst-Ablation"
          className="font-semibold text-[#0E58A8] underline underline-offset-4"
        >
          endometriotic ovarian cysts
        </a>
        , which can co-exist with PCS
      </>
    ),
    img: "/three.png",
  },
];



export default function Candidate() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Top Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full text-[30px] font-bold text-[#0E58A8]">
            +
          </span>
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
          <br/>You may be at higher risk if you:
        </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Risk.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4"
            >
              {/* <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div> */}
              <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>


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
              {/* <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div> */}
              <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Expect Section */}
        <h4 className="text-2xl md:text-3xl text-black font-semibold pt-14 mb-6">
          Additional Symptoms
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {expect.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-4"
            >
              {/* <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div> */}
              <h3 className="mt-4 text-sm md:text-base font-semibold px-4 text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-5xl text-sm leading-7 text-[#374151] md:text-base">
          <span className="font-semibold">Important:</span> PCS symptoms can overlap with other conditions such as{" "}
          <a
            href="/Uterine-Fibroid-Embolization"
            className="font-semibold text-[#0E58A8] underline underline-offset-4"
          >
            uterine fibroids
          </a>{" "}
          and{" "}
          <a
            href="/Endometriotic-Ovarian-Cyst-Ablation"
            className="font-semibold text-[#0E58A8] underline underline-offset-4"
          >
            endometriotic ovarian cysts
          </a>
          . A proper diagnosis is essential before starting any treatment.
        </p>

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
