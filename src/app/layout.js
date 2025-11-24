import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "FutbolTotal",
  description: "Web de fútbol con plantilla editable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-base-200 min-h-screen">

        <Navbar />

        <div className="pt-20"> {/* para que no tape el navbar fijo */}
          {children}
        </div>
        
      </body>
    </html>
  );
}
