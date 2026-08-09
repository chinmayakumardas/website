import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PageWrapper from "@/components/layout/page-wrapper";
import ContentWrapper from "@/components/legal/content-wrapper";

interface ContentPageProps {
  title: string;
  
  lastUpdated?: string;
  sections: {
    title: string;
    content?: string[];
    list?: string[];
  }[];
}

export default function ContentPage({
  title,
  
  lastUpdated,
  sections,
}: ContentPageProps) {
  return (
    <>
      <Header />

      <PageWrapper>
        <main>
          <ContentWrapper>
            <header className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {title}
              </h1>

           

              {lastUpdated && (
                <p className="mt-3 text-sm text-muted-foreground">
                  Last updated: {lastUpdated}
                </p>
              )}
            </header>

            <article className="mx-auto mt-12 max-w-3xl space-y-10">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-4 text-2xl font-semibold">
                    {section.title}
                  </h2>

                  {section.content?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-4 leading-7 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </article>
          </ContentWrapper>
        </main>
      </PageWrapper>

      <Footer />
    </>
  );
}