import Image from "next/image";

export default function UterineFibroidsSection() {
  return (
    <section className="bg-[#ffffff] py-16 px-4 bg-center bg-no-repeat" style={{ backgroundImage: "url('/faq.png')" }}>
      <div className="max-w-full mx-auto text-center">
        
        {/* Heading */}
        <h5 className="text-4xl text-black  mb-2">
          What Are <span className="text-[#0E58A8] font-bold">Uterine Fibroids?</span>
        </h5>

        <p className="text-gray-600 mb-8">
          Uterine fibroids are common, non-cancerous tumors of the uterus.
        </p>

        <h4 className="text-3xl text-black  mb-10">
          Uterine fibroids are classified according to their location in the uterus
        </h4>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
          
          {/* Left Side */}
          <div className=" flex flex-col items-center">
            
            {/* Subserosal */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-40 p-6 mb-15 text-left flex flex-col justify-center  relative">
              <h3 className="font-bold text-black text-lg mb-2">Subserosal Fibroids:</h3>
              <p className="text-black text-sm">
                These develop in the outer portion of the uterus and continue to grow outward.
              </p>
              <div className="absolute right-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Intramural */}
            <div className="bg-white shadow-lg rounded-xl max-w-xs h-40 p-6 text-left flex flex-col justify-center  relative">
              <h3 className="font-bold text-black text-lg mb-2">Intramural Fibroids:</h3>
              <p className="text-black text-sm">
                These are the most common type and develop in the uterine muscle wall.
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
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-40 mb-15 flex flex-col justify-center text-left relative">
              <h3 className="font-bold text-black text-lg mb-2">Submucosal Fibroids:</h3>
              <p className="text-black text-sm">
                These are the least common and develop within the uterine cavity,
                causing excessive and prolonged menstrual bleeding.
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

            {/* Pedunculated */}
            <div className="bg-white shadow-lg rounded-xl p-6 max-w-xs h-40 flex flex-col justify-center text-left relative">
              <h3 className="font-bold text-black text-lg mb-2">Pedunculated fibroids:</h3>
              <p className="text-black text-sm">
                Grow on stalks or stems. These stems are attached to the uterine wall
                and can grow either outside the uterus or inside the uterine cavity.
              </p>
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0E58A8] rounded-full"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
