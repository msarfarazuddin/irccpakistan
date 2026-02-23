import Image from "next/image";

const symptoms = [
  {
    title: "The procedure usually takes about 2 to 3 hours, but it can take longer.",
    img: "/one1.png",
  },
  {
    title:
      "Variceal bleeding: There is an 80 to 90% chance that you will not have any more bleeding from the varices (80 to 90 out of 100 patients do not have any more of this bleeding).",
    img: "/two2.png",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-[#0E58A8E5] py-16 px-4 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* rename file to banner-cand.mp4 and keep in /public */}
        <source src="/irccpakistan/banner-cand.mp4" type="video/mp4" />
      </video>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[rgba(14,88,168,0.9)]" />

      <div className="relative max-w-[1400px] mx-auto text-center flex flex-col items-center justify-center">
        <div className="inline-flex w-fit items-center gap-2 rounded-full shadow-lg border border-[#dce6ff] bg-white px-4 py-2 text-sm font-semibold text-[#0E58A8]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full text-[26px] font-bold text-[#0E58A8]">
            +
          </span>
          <span className="text-[#111111] font-normal">Symptoms</span>
        </div>

        <h5 className="text-3xl text-white md:text-4xl pt-7 mb-4">
          Can TIPS cure <span className="text-white font-bold">these problems?</span>
        </h5>

        <p className="text-white max-w-5xl mx-auto mb-2 text-sm md:text-base">
          The stent-graft used in a TIPS procedure creates a new path between the portal vein and hepatic veins. This new
          path helps keep blood from building up in the liver. This should help with the major problems. But, it does
          not make your liver work better than it already does.
        </p>

        <p className="text-white max-w-5xl mx-auto mb-6 text-sm md:text-base">
          The only long-term cure for portal hypertension is to have a liver transplant. If your doctor has told you
          that a liver transplant could help you, you can have TIPS done and still get a transplant later.
        </p>

        <div className="grid grid-cols-1 max-w-5xl sm:grid-cols-2 gap-6">
          {symptoms.map((item, index) => (
            <div
              key={index}
              className="bg-[#386fab] w-full max-w-full mx-auto rounded-xl shadow-xl hover:shadow-md transition duration-300 p-4"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>

              <h3 className="mt-4 text-[18px] md:text-base font-semibold px-4 text-white text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
