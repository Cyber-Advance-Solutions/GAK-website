import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="sec">
      <div className="wrap" style={{ textAlign: "center", padding: "40px 0" }}>
        <div className="lc-ic" style={{ width: 64, height: 64, margin: "0 auto 22px", borderRadius: 16 }}>
          <Compass size={30} strokeWidth={1.6} />
        </div>
        <span className="eyebrow" style={{ justifyContent: "center" }}>Error 404</span>
        <h1 className="h-lg" style={{ margin: "12px 0 10px" }}>Page not found</h1>
        <p className="lead" style={{ margin: "0 auto 26px" }}>The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <Link className="btn-primary" href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <Home size={16} strokeWidth={1.8} /> Back to home
        </Link>
      </div>
    </section>
  );
}
