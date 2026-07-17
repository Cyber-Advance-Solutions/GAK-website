// Tiny icon layer over lucide-react (v1.x).
// All app icons go through <Icon icon={X} /> so size/stroke/color stay
// consistent: size 20, strokeWidth 1.75, color currentColor.
//
// Note: lucide-react 1.x removed brand glyphs, so Facebook / Instagram /
// YouTube are provided here as minimal inline brand SVGs (see bottom).

import type { ComponentType, CSSProperties } from "react";
import {
  type LucideProps,
  GraduationCap,
  Download,
  MessageSquare,
  Landmark,
  Network,
  BookOpen,
  Award,
  Shirt,
  Users,
  Trophy,
  Briefcase,
  ExternalLink,
  Bot,
  HelpCircle,
  MapPin,
  PenLine,
} from "lucide-react";

export type IconType = ComponentType<LucideProps>;

export function Icon({
  icon: Glyph,
  size = 20,
  strokeWidth = 1.75,
  className,
  style,
}: {
  icon: IconType;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
      style={style}
      aria-hidden
    />
  );
}

// Route -> icon, used by the home/quick-access grids (keyed by href so we
// never have to touch the content in lib/data.ts).
export const ROUTE_ICON: Record<string, IconType> = {
  "/messages": MessageSquare,
  "/about": Landmark,
  "/organogram": Network,
  "/quick-links": BookOpen,
  "/scholarships": Award,
  "/uniform": Shirt,
  "/alumni": Users,
  "/activities": Trophy,
  "/admissions": GraduationCap,
  "/hr": Briefcase,
  "/links": ExternalLink,
  "/faqs": HelpCircle,
  "/chatbot": Bot,
  "/contact": MapPin,
  "/downloads": Download,
  "/feedback": PenLine,
};

export function routeIcon(href: string): IconType {
  return ROUTE_ICON[href] ?? ExternalLink;
}

// ---- minimal brand marks (lucide 1.x no longer ships these) ----
type BrandProps = { size?: number; className?: string };

export function Facebook({ size = 20, className }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M14 9h2.5l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.2C16.7.1 15.8 0 14.7 0 12.3 0 11 1.4 11 4v2H8.5v3H11v9h3V9z" />
    </svg>
  );
}

export function Instagram({ size = 20, className }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" aria-hidden className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Youtube({ size = 20, className }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5C.6 9.4.6 12 .6 12s0 2.6.4 4.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-4.5.4-4.5s0-2.6-.4-4.5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
    </svg>
  );
}
