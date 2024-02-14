import Image from "next/image";
import Container from "./_components/common/Container";
import Section from "./_components/common/Section";
import SectionContainer from "./_components/common/SectionContainer";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Link href="/modelo1">Ir a modelo 1</Link>
    </Container>
  );
}
