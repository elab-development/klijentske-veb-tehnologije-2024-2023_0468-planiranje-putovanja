import { type AttractionSummary } from '../types/attraction';
import { stripHtml } from './stripHtml';

const num = (v: any) => (v == null ? undefined : Number(v));

function clamp(x: number, min = 0, max = 5) {
  return Math.min(max, Math.max(min, x));
}

export function mapAmadeusActivity(raw: any): AttractionSummary {
  const a = raw?.attributes ?? raw ?? {};

  const id = raw?.id ?? a.id ?? crypto.randomUUID();
  const name = a.name ?? raw?.name ?? 'Activity';

  // geo
  const lat = num(a.geoCode?.latitude ?? raw?.geoCode?.latitude);
  const lon = num(a.geoCode?.longitude ?? raw?.geoCode?.longitude);

  // opis – HTML → plain text
  const descriptionHtml = a.description ?? raw?.description;
  const description = stripHtml(descriptionHtml);

  // slike – preferiraj attributes.pictures, zatim root.pictures, zatim attributes.images
  const pictures: string[] = Array.isArray(a.pictures)
    ? a.pictures
    : Array.isArray(raw?.pictures)
    ? raw.pictures
    : Array.isArray(a.images)
    ? a.images
    : [];
  const imageUrl = pictures[0];

  // cena
  const priceObj = a.price ?? raw?.price ?? a.priceRange ?? raw?.priceRange;
  const amount = num(priceObj?.amount ?? priceObj?.minimumAmount);
  const currency = priceObj?.currencyCode ?? priceObj?.currency ?? 'EUR';

  // rating
  const rawRating =
    num(a.rating) ??
    num(a.reviewsAverage) ??
    num(raw?.rating) ??
    num(raw?.reviewsAverage);
  const rating =
    rawRating != null ? Math.round(clamp(rawRating) * 10) / 10 : undefined;

  // trajanje i deep link
  const durationText =
    a.minimumDuration ?? raw?.minimumDuration ?? a.duration ?? raw?.duration;
  const providerUrl =
    a.bookingLink ??
    raw?.bookingLink ??
    a.productUrl ??
    raw?.productUrl ??
    a.url ??
    raw?.url;

  return {
    id: String(id),
    name,
    lat: lat ?? 0,
    lon: lon ?? 0,
    description,
    imageUrl,
    images: pictures.length ? pictures : undefined,
    categories: a.category ? [String(a.category)] : undefined,
    rating,
    durationText,
    price: amount != null ? { amount, currency: String(currency) } : undefined,
    providerUrl,
  };
}
