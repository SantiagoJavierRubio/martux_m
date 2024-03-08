import NavBar2 from "@/app/components/NavBar2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar2 />
      <main className="bg-zinc-50 min-h-screen flex flex-col justify-stretch items-stretch font-archivo mt-16 relative">
        {children}
      </main>
    </>
  );
}
