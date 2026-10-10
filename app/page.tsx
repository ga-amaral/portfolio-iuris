import Header from "@/components/header";
import Hero from "@/components/hero";
import ProblemSection from "@/components/problem-section";
import AcquisitionSystem from "@/components/acquisition-system";
import Services from "@/components/services";
import CaseStudies from "@/components/case-studies";
import AuthoritySection from "@/components/authority-section";
import ProcessSection from "@/components/process-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white antialiased">
      <Header />
      <main id="main-content" className="pt-16">
        <Hero />
        <ProblemSection />
        <AcquisitionSystem />
        <Services />
        <CaseStudies />
        <AuthoritySection />
        <ProcessSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}