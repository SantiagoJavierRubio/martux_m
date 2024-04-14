import NavBar from "@/app/components/NavBar";
import NavMenu from "../components/NavMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar className="hidden lg:flex" />
      <main className="bg-zinc-50 min-h-screen flex flex-col justify-stretch items-stretch font-archivo lg:mt-16 relative">
        {children}
      </main>
    </>
  );
}
