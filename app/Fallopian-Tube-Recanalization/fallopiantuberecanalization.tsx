import Image from "next/image";

export default function fallopiantuberecanalization() {
  return (
    <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/irccpakistan/faq.png')" }}>
      <div className="max-w-full mx-auto text-center">

        {/* Heading */}
        <h5 className="text-4xl text-black  mb-2">
          What happens during a <span className="text-[#0E58A8] font-bold">fallopian tube recanalization?</span>
        </h5>

        <p className="text-gray-600 mb-8">
          Fallopian tube recanalization (FTR) is a nonsurgical procedure our interventional radiologists use to treat these blockages. Recanalization is the medical term for “reopening.”
        </p>

        <h4 className="text-3xl text-black  mb-10">
          During the procedure, which does not require any needles or incisions, we will:
        </h4>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">

          {/* Left Side */}
          <div className=" flex flex-col items-center">

            {/* Subserosal */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-30 p-6 mb-10 text-left flex flex-col justify-center  relative">
              <p className="text-black text-sm">
                Place a speculum into the vagina and pass a small plastic tube (catheter) through the cervix into the uterus.
              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Intramural */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-30 mb-10 p-6 text-left flex flex-col justify-center  relative">
              <p className="text-black text-sm">
                Examine the uterine cavity using an X-ray fluoroscopy.
              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Subserosal */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-30 p-6 mb-15 text-left flex flex-col justify-center  relative">
              <p className="text-black text-sm">
                Determine if there is a blockage and if it is located on one or both fallopian tubes.
              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/Uterine Fibroids.png" // apni image public folder me rakho
              alt="Uterus Illustration"
              width={500}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center">

            {/* Submucosal */}
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-30 mb-10 flex flex-col justify-center text-left relative">
              <p className="text-black text-sm">
                Inject a liquid contrast agent (dye) through the catheter.
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Pedunculated */}
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-30  mb-10 flex flex-col justify-center text-left relative">
              <p className="text-black text-sm">
                Obtain a hystero-salpingogram or HSG. Literally, that means a fallopian tube to clear the blockage.
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-30 flex flex-col justify-center text-left relative">
              <p className="text-black text-sm">
                Passes a smaller catheter and microwire through the first catheter and then into the fallopian tube to clear the blockage.              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

          </div>

        </div>
        <h4 className="text-2xl text-black  mb-10">
          More than 90 percent of the time, interventional radiologists can reopen blocked fallopian tubes and restore normal function.
        </h4>
      </div>
    </section>
  );
}
