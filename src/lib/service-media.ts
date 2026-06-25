import type { Service } from "@/data/services";

export function getServiceThumbnail(service: Service): string | null {
  return (
    service.images?.after ??
    service.images?.before ??
    service.images?.gallery?.[0] ??
    null
  );
}

export function hasServiceMedia(service: Service): boolean {
  return !!(
    getServiceThumbnail(service) ||
    service.images?.videos?.length
  );
}

export function hasServiceImages(service: Service): boolean {
  return hasServiceMedia(service);
}
