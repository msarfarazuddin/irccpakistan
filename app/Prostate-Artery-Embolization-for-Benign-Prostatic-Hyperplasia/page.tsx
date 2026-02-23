import Banner from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/banner";
import About from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/about";
import Prostatis from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/prostaticartery";
import Candiator from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/Candidateforpae";
import Textcenter from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/textcenter";
import Benifits from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/Benefitsofpae";
import Form from "@/app/Prostate-Artery-Embolization-for-Benign-Prostatic-Hyperplasia/form";
import Review from "@/app/components/sections/TestimonialsSection";
import Blog from "@/app/components/sections/BlogSection";

export default function Ufe() {
  return (
    <>
      <Banner />
      <About/>
      <Prostatis/>
      <Candiator/>
      <Textcenter/>
      <Benifits/>
      <Form/>
      <section className="pt-20  bg-white">
      <Review/>
      </section>
      <Blog/>
    </>
  );
}
