


import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import PageWrapper from "@/components/layout/page-wrapper";
import Container from "@/components/layout/container";

export default function AboutPage() {


  return (
    <>
 
      <Header />

      <PageWrapper>
        <main className="relative">
          <Container>
            <Hero />
          </Container>
        </main>
      </PageWrapper>

      <Footer />
    </>
  );
}