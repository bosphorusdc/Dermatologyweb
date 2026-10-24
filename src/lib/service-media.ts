import type { Service } from "@/data/services";
import logoImg from "@/assets/logo.png";

export const CLINIC_LOGO = logoImg;

export function getServiceThumbnail(service: Service): string | null {
  if (service.images?.after) return service.images.after;
  if (service.images?.before) return service.images.before;
  if (service.images?.gallery?.[0]) return service.images.gallery[0];
  return null;
}

export function hasServiceVideo(service: Service): boolean {
  return Boolean(service.images?.videos && service.images.videos.length > 0);
}

export function hasServiceMedia(service: Service): boolean {
  return Boolean(
    getServiceThumbnail(service) ||
    hasServiceVideo(service)
  );
}

export function hasServiceImages(service: Service): boolean {
  return Boolean(getServiceThumbnail(service));
}
