"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-primary">
          FútbolTotal ⚽
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/noticias">Noticias</Link></li>

          <li>
            <details>
              <summary>Ligas</summary>
              <ul className="p-2 bg-base-100 rounded-lg shadow-md z-[9999] relative">
                <li><Link href="/ligas/laliga">LaLiga EA Sports</Link></li>
                <li><Link href="/ligas/premier">Premier League</Link></li>
                <li><Link href="/ligas/seriea">Serie A TIM</Link></li>
                <li><Link href="/ligas/bundesliga">Bundesliga</Link></li>
                <li><Link href="/ligas/ligue1">Ligue 1 Uber Eats</Link></li>
              </ul>
            </details>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-2 mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/noticias">Noticias</Link></li>
            <li>
              <details>
                <summary>Ligas</summary>
                <ul className="p-2 bg-base-100 rounded-lg shadow-md">
                  <li><Link href="/ligas/laliga">LaLiga EA Sports</Link></li>
                  <li><Link href="/ligas/premier">Premier League</Link></li>
                  <li><Link href="/ligas/seriea">Serie A TIM</Link></li>
                  <li><Link href="/ligas/bundesliga">Bundesliga</Link></li>
                  <li><Link href="/ligas/ligue1">Ligue 1 Uber Eats</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
