/** @type {import('next').NextConfig} */

// Where this Next.js server reaches GAK-Backend (always direct, never through ngrok)
const INTERNAL_BACKEND = (process.env.API_INTERNAL_URL || "http://localhost:5000/api").replace(/\/api\/?$/, "");

// Where the BROWSER loads uploaded files from. "" (or a relative API URL) = through this site's own
// domain via the rewrites below, which is what makes the site work behind ngrok.
const publicBackend =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/api\/?$/, "");
const proxied = !/^https?:\/\//.test(publicBackend);

const nextConfig = {
  reactStrictMode: true,
  // Let testers open the dev server through ngrok without Next.js blocking its dev resources
  allowedDevOrigins: ["172.16.72.61", "*.ngrok-free.app", "*.ngrok-free.dev", "*.ngrok.app", "*.ngrok.io"],

  // Browser requests to /api/* and /uploads/* on this site are forwarded to the backend
  async rewrites() {
    return [
      { source: "/api/:path*", destination: `${INTERNAL_BACKEND}/api/:path*` },
      { source: "/uploads/:path*", destination: `${INTERNAL_BACKEND}/uploads/:path*` },
    ];
  },

  images: proxied
    ? // Uploaded images are plain "/uploads/..." paths on this domain; serve them as-is
      { unoptimized: true }
    : {
        remotePatterns: [
          (() => {
            const u = new URL(publicBackend);
            return { protocol: u.protocol.replace(":", ""), hostname: u.hostname, port: u.port || "", pathname: "/uploads/**" };
          })(),
        ],
      },
};

export default nextConfig;
