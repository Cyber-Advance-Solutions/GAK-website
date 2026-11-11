import { api, asJson, asList, assetUrl, byOrder, isLive } from "@/lib/api";
import type { GalleryEvent } from "@/components/EventsGalleryView";

/** Row shape of GET /events (admin "Latest" / "Archive" modules) */
export type ApiEvent = {
  id: number;
  title: string;
  date?: string | null;
  coverImage?: string | null;
  images?: string[] | string | null;
  showOnLatest?: boolean;
  isArchived?: boolean;
  isPublished?: boolean;
  displayOrder?: number;
};

export type EventFilter = "latest" | "archive" | "all";

/** Maps an event album to the EventsGalleryView card shape */
export function toGalleryEvent(e: ApiEvent): GalleryEvent {
  const images = asJson<string[]>(e.images, []).map((p) => assetUrl(p)).filter(Boolean);
  return {
    name: e.title,
    cover: assetUrl(e.coverImage) || images[0] || "",
    images,
  };
}

/**
 * Published albums ordered like the admin panel (displayOrder).
 *  latest  -> showOnLatest and not archived
 *  archive -> isArchived
 *  all     -> every published album (gallery)
 */
export async function getEventAlbums(filter: EventFilter): Promise<GalleryEvent[]> {
  const rows = asList<ApiEvent>(await api<unknown>("/events", []));
  return rows
    .filter((e) => e.isPublished !== false && isLive(e))
    .filter((e) =>
      filter === "latest" ? e.showOnLatest === true && e.isArchived !== true : filter === "archive" ? e.isArchived === true : true
    )
    .sort(byOrder)
    .map(toGalleryEvent)
    .filter((e) => e.cover);
}
