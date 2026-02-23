import Varicocele from "@/app/Varicocele-Embolization/Varicocele Banner";
import Varicoceleabout from "@/app/Varicocele-Embolization/Varicoceleabout";
import TextCenter from "@/app/Varicocele-Embolization/textcenter";
import Candidat from "@/app/Varicocele-Embolization/Candidate";
import Form from "@/app/Varicocele-Embolization/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";


export default function VE() {
  return (
    <>
      <Varicocele />
      <Varicoceleabout />
      <TextCenter/>
      <Candidat/>
      <Form/>
      <section className="pt-20  bg-white">
      <Review/>
      </section>
      <Blog/>
    </>
  );
}