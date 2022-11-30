import Providers from "./components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
