/** @type {import('next').NextConfig} */

// Where the BROWSER loads uploaded files from. "" (or a relative API URL) = through this site's own
// domain via the rewrites below, which is what makes the site work behind ngrok.
const publicBackend =
  process.env.NEXT_PUBLIC_BACKEND_URL ?? (process.env.NEXT_PUBLIC_API_URL || "/api").replace(/\/api\/?$/, "");
const proxied = !/^https?:\/\//.test(publicBackend);

const nextConfig = {
  reactStrictMode: true,
  // Let testers open the dev server through ngrok without Next.js blocking its dev resources
  allowedDevOrigins: ["172.16.72.61", "*.ngrok-free.app", "*.ngrok-free.dev", "*.ngrok.app", "*.ngrok.io"],

  // Browser requests to /api/* and /uploads/* on this site are forwarded to the backend by
  // app/api/[...path] and app/uploads/[...path], using BACKEND_URL from .env at runtime (no rebuild).

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
