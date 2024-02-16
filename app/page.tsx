import Image from "next/image";
import Container from "./_components/common/Container";
import Section from "./_components/common/Section";
import SectionContainer from "./_components/common/SectionContainer";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center gap-12">
      <Link href="/modelo1">Ir a modelo 1</Link>
      <Link href="/modelo2">Ir a modelo 2</Link>
    </Container>
  );
}
