
// stackbit.config.ts
export default {
  stackbitVersion: "~0.6.0",  // Versión de Stackbit
  ssgName: "custom",  // Nombre del generador de sitio estático (SSG)
  nodeVersion: "18",  // Versión de Node.js que usas
  // Comando para iniciar Astro en el contenedor de Stackbit
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  // Configuración específica de Astro
  experimental: {
    ssg: {
      name: "Astro",  // Nombre del SSG que estás usando
      logPatterns: {
        up: ["is ready", "astro"]  // Patrones de log para confirmar que Astro está listo
      },
      directRoutes: {
        "socket.io": "socket.io"
      },
      passthrough: ["/vite-hmr/**"]  // Permitir rutas específicas (útil para hot-reloading)
    }
  }
};
