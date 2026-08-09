import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import PageWrapper from "@/components/layout/page-wrapper";

export default function HomePage() {
  return (
    <>
      <Header />

      <PageWrapper>
        <Hero />
      </PageWrapper>

      <Footer />
    </>
  );
}
