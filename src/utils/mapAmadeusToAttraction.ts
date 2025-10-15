import type { AttractionSummary } from '../types/attraction';

export function mapAmadeusActivity(a: any): AttractionSummary {
  const attrs = a?.attributes ?? {};
  const name = attrs?.name ?? a?.name ?? 'Activity';
  const price = attrs?.price || attrs?.priceRange || a?.price;
  const lat = attrs?.geoCode?.latitude ?? a?.geoCode?.latitude;
  const lon = attrs?.geoCode?.longitude ?? a?.geoCode?.longitude;

  return {
    id: a?.id ?? crypto.randomUUID(),
    name,
    lat: Number(lat),
    lon: Number(lon),
    categories: attrs?.category ? [String(attrs.category)] : undefined,
    rating: attrs?.rating ?? attrs?.reviewsAverage,
    price: price
      ? {
          amount: Number(price.amount ?? price.minimumAmount ?? 0),
          currency: String(price.currencyCode ?? price.currency ?? 'EUR'),
        }
      : undefined,
    imageUrl: attrs?.pictures?.[0] ?? attrs?.images?.[0],
    description: attrs?.description ?? attrs?.shortDescription,
    providerUrl: attrs?.bookingLink ?? attrs?.productUrl,
  };
}
