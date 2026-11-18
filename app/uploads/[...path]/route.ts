import type { NextRequest } from "next/server";
import { proxyToBackend } from "@/lib/backendProxy";

// Forwards /uploads/* to the backend (address from BACKEND_URL in .env, read at runtime)
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const handler = (req: NextRequest) => proxyToBackend(req, "/uploads");
export { handler as GET, handler as HEAD, handler as POST, handler as PUT, handler as PATCH, handler as DELETE, handler as OPTIONS };
