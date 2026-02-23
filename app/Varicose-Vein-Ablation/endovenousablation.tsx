import Image from "next/image";

export default function UterineFibroidsSection() {
  return (
    <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/faq.png')" }}>
      <div className="max-w-full mx-auto  text-center">

        {/* Heading */}
        <h5 className="text-4xl text-black  mb-2">
          Endovenous <span className="text-[#0E58A8] font-bold">Ablation</span>
        </h5>

        <p className="text-gray-600 lg:pl-30  lg:pr-30 sm:pl-2 sm:pr-2 mb-2">
          Radiofrequency Ablation (RFA), Endovenous Laser Therapy (EVLT) and non-thermal non-tumescent ablation are safe, effective, minimally invasive procedures for the treatment of varicose veins. With both types of ablation, thermal energy is used to close off a blood vessel in the form of either laser or radiofrequency energy. The failing vein closes and is no longer functional. The closed vein is eventually absorbed by the body.
        </p>

        <p className="text-gray-600 lg:pl-30  lg:pr-30 sm:pl-2 sm:pr-2 mb-8">
          The ablation procedures are performed in an outpatient setting, do not involve any incisions, and recovery time is minimal. Blood flow is diverted to healthy veins, with no negative effects on blood flow or circulation.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">

          {/* Left Side */}
          <div className=" flex flex-col items-center">

            {/* Subserosal */}
            <div className="bg-white shadow-lg rounded-xl max-w-lg h-60 p-6 mb-15 text-left flex flex-col justify-center  relative">
              <h3 className="font-bold text-black text-lg mb-2">Endovenous Laser Therapy (EVLT)</h3>
              <p className="text-black text-sm">
                Endovenous Laser Therapy (EVLT) is a minimally invasive procedure performed under local anesthesia in larger varicose veins in the legs. During the procedure, a laser probe is inserted into the vein using ultrasound as guidance. Laser light pulses are emitted causing the vein to shrink and close off, eliminating blood flow. The entire procedure is typically completed in an hour.              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Intramural */}
            
          </div>

          {/* Center Image */}
          <div className="flex flex-col  justify-center items-center">
            <Image
              src="/Uterine Fibroids.png" // apni image public folder me rakho
              alt="Uterus Illustration"
              width={320}
              height={300}
              className="object-cover"
            />

            <div className="bg-white shadow-lg rounded-xl max-w-lg h-60 lg:h-60  p-6 text-left flex flex-col justify-center  relative">
              <h3 className="font-bold text-black text-lg mb-2">Non-thermal Non-tumescent Ablation</h3>
              <p className="text-black text-sm">
                Novel non-thermal techniques, such as mechanochemical ablation (MOCA) clarivein and cyanoacrylate adhesive glue (CAE) venaseal and foam therapy varithena have been developed to overcome these unwelcome effects of thermal ablation. So far, the novel techniques have been found to have similar efficacy to thermal methods.              </p>
              <div className="absolute top-[0px] right-[50%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center">

            {/* Submucosal */}
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg lg:h-60 h-80 sm:h-full mb-15 flex flex-col justify-center text-left relative">
              <h3 className="font-bold text-black text-lg mb-2">Radiofrequency Ablation (RFA)</h3>
              <p className="text-black text-sm">
                Radiofrequency Ablation (RFA) is an image guided procedure using radiofrequency energy to close varicose veins in the leg. Radiofrequency energy is delivered in small bursts through a tiny catheter causing the vein to shrink around the catheter as the vein is being treated. After radiofrequency ablation, the vein is smaller and thicker, and there is no blood flowing through it. Over time, the vein is absorbed by the surrounding tissues and permanently disappears. The entire procedure is typically completed in an hour.
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Pedunculated */}
           

          </div>

        </div>
      </div>
    </section>
  );
}
