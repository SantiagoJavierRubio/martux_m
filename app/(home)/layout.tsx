export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-zinc-50 min-h-screen flex flex-col justify-stretch items-stretch font-rubik font-archivo">
      {children}
    </main>
  );
}
