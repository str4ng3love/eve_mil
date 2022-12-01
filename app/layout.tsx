import Providers from "./components/Providers";
import Navigation from "./components/Navigation";
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <Navigation/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
