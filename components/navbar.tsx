import Link from "next/link";
export default function Navbar() {
  return (
    <header className="py-6 flex justify-between items-center px-8 bg-white/70 shadow-lg backdrop-blur-lg sticky top-0 z-40">
      <Link href="/"><img src="/logo-lycee.png" alt="Logo Lycée" className="w-16"/></Link>
      <nav className="space-x-6 font-semibold">
        <Link href="/login">Connexion</Link>
        <Link href="/agenda">Agenda</Link>
        <Link href="/actualites">Actualités</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
