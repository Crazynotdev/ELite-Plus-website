export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-700 to-fuchsia-600 text-white animate-fade-in">
      <img src="/logo-lycee.png" alt="Lycée Elite Plus" className="w-32 mb-8 animate-bounce" />
      <h1 className="text-5xl font-black tracking-tight drop-shadow-lg mb-4 animate-fade-in">
        Lycée Elite Plus
      </h1>
      <p className="text-xl font-medium mb-8 text-center max-w-xl animate-fade-in-delay">
        Modernisez la gestion scolaire — Communication, suivi, réussite. <br /> Accès rapide, sécurisé, partout.
      </p>
      <div className="flex space-x-4">
        <span className="px-6 py-3 bg-white/10 rounded-full border border-white/30 font-semibold backdrop-blur-lg animate-pulse">
          #Innovation
        </span>
        <span className="px-6 py-3 bg-white/10 rounded-full border border-white/30 font-semibold backdrop-blur-lg animate-pulse">
          #Excellence
        </span>
      </div>
    </div>
  );
}
