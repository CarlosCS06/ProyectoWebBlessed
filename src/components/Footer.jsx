export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 mt-20 text-base">
      <p className="font-semibold">© {new Date().getFullYear()} FutbolTotal</p>
      <p className="text-sm opacity-70">Next.js + TailwindCSS + DaisyUI</p>
    </footer>
  );
}
