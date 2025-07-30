/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cette ligne active l'export statique
  output: 'export',

  // Cette option est recommandée pour les exports statiques sur des serveurs non-Vercel
  // Elle désactive l'optimisation d'image en temps réel de Next.js,
  // mais les images seront toujours optimisées au moment de la construction.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
