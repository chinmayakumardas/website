import Container from "@/components/layout/container";

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({
  children,
}: ContentWrapperProps) {
  return (
    <Container>
      <div className="mx-auto w-full max-w-4xl py-16 sm:py-20 lg:py-24">
        {children}
      </div>
    </Container>
  );
}