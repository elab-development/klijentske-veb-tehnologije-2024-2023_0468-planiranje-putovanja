const GEO_URL = 'https://api.geoapify.com/v1/geocode/search';

export async function geocodeCity(
  q: string,
  apiKey: string
): Promise<{ lat: number; lon: number } | null> {
  const url = new URL(GEO_URL);
  url.searchParams.set('text', q);
  url.searchParams.set('type', 'city');
  url.searchParams.set('limit', '1');
  url.searchParams.set('apiKey', apiKey);

  const res = await fetch(url.toString());
  if (!res.ok) return null;

  const data = await res.json();
  const feat = data?.features?.[0];
  if (!feat?.geometry?.coordinates) return null;

  const [lon, lat] = feat.geometry.coordinates;
  return { lat, lon };
}
