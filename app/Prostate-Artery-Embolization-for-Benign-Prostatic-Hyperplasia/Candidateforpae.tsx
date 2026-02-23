import Image from "next/image";

export default function Candidate() {
  return (
    <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/irccpakistan/faq.png')" }}>
      <div className="max-w-full mx-auto text-center">

        {/* Heading */}
        <h5 className="text-4xl text-black  mb-2">
          Who Is a <span className="text-[#0E58A8] font-bold">Candidate for PAE?</span>
        </h5>

        <p className="text-gray-600 mb-8">
          Candidates for the procedure typically meet the following:
        </p>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">

          {/* Left Side */}
          <div className=" flex flex-col items-center">

            {/* Subserosal */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-30 p-6 mb-15 text-left flex flex-col justify-center  relative">
              <p className="text-black text-sm">
                Are between the age of 50 and 85
              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Intramural */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-30 p-6 text-left flex flex-col justify-center  relative">
              <p className="text-black text-sm">
                Have tried but not responded to six months of medication therapy or have significant side effects from medication such as dizziness, fatigue or sexual dysfunction
              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image
              src="/Uterine Fibroids.png" // apni image public folder me rakho
              alt="Uterus Illustration"
              width={420}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center">

            {/* Submucosal */}
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-30 mb-15 flex flex-col justify-center text-left relative">
              <p className="text-black text-sm">
                Have lower urinary tract symptoms such as difficulty urinating, frequent urination or urinary retention requiring catheterization, caused by an enlarged prostate
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Pedunculated */}
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-30 flex flex-col justify-center text-left relative">
              <p className="text-black text-sm">
                Have been screened for prostate cancer risk, including a prostate-specific antigen (PSA) test
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
