


import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PageWrapper from "@/components/layout/page-wrapper";
import ContactForm from "@/components/contact/contact-form";

export default function ContactusPage() {


  return (
    <>
 
      <Header />

      <PageWrapper>
        <main className="relative">
          
           <ContactForm/>
          
        </main>
      </PageWrapper>

      <Footer />
    </>
  );
}