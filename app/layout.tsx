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
      <body className="bg-gradient-to-tl from-orange-300 to-red-500 ">
        <Providers>
          <Navigation/>
          {children}
          </Providers>
      </body>
    </html>
  );
}
