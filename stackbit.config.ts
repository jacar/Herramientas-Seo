// stackbit.config.ts
export default {
  stackbitVersion: "~0.6.0",  // Versión de Stackbit, el símbolo ~ permite actualizaciones de la misma versión principal.
  ssgName: "custom",  // Estás usando un generador de sitio estático personalizado, en este caso Astro.
  nodeVersion: "18",  // La versión de Node.js compatible (versión recomendada: 18).
  
  // Comando para iniciar el servidor de desarrollo de Astro en Stackbit.
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  
  // Configuración experimental para Stackbit.
  experimental: {
    ssg: {
      name: "Astro",  // Nombre del generador de sitio estático (Astro).
      logPatterns: {
        up: ["is ready", "astro"]  // Logs que indican cuando Astro está listo.
      },
      directRoutes: {
        "socket.io": "socket.io"  // Configuración para rutas directas como WebSockets (si es necesario).
      },
      passthrough: ["/vite-hmr/**"]  // Permitir rutas específicas necesarias para Hot Module Replacement (HMR).
    }
  }
};
