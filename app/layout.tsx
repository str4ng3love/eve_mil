import Providers from "./components/Providers";
import Navigation from "./components/nav/Navigation";
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      {/* do not style body with gradients, it produces unwanted background behaviour */}
      <body>
        <Providers>
          <Navigation/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
