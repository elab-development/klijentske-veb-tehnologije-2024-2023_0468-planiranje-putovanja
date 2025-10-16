type TokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};
type AmadeusActivity = any;

const AUTH_URL = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const BASE_URL = 'https://test.api.amadeus.com/v1/shopping/activities';

export class AmadeusClient {
  private key: string;
  private secret: string;
  private token: string | null = null;
  private tokenExp = 0;

  constructor(key: string, secret: string) {
    this.key = key;
    this.secret = secret;
  }

  private async getToken(): Promise<string> {
    const now = Math.floor(Date.now() / 1000);
    if (this.token && now < this.tokenExp - 30) return this.token;

    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', this.key);
    body.set('client_secret', this.secret);

    const res = await fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    if (!res.ok) throw new Error('Amadeus auth failed');
    const data = (await res.json()) as TokenResponse;
    this.token = data.access_token;
    this.tokenExp = Math.floor(Date.now() / 1000) + data.expires_in;
    return this.token!;
  }

  async searchActivities(params: {
    lat: number;
    lon: number;
    radiusMeters?: number;
    pageLimit?: number;
    sortBy?: 'rating' | 'relevance' | 'price';
    currency?: string;
  }): Promise<AmadeusActivity[]> {
    const token = await this.getToken();
    const url = new URL(BASE_URL);
    url.searchParams.set('latitude', String(params.lat));
    url.searchParams.set('longitude', String(params.lon));
    url.searchParams.set('radius', String(params.radiusMeters ?? 5000));
    if (params.pageLimit)
      url.searchParams.set('page[limit]', String(params.pageLimit));
    if (params.sortBy) url.searchParams.set('sort', params.sortBy);
    if (params.currency) url.searchParams.set('currencyCode', params.currency);

    const res = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error(`Amadeus search failed: ${res.status}`);
    const data = await res.json();
    console.log('Amadeus data', data);
    return Array.isArray(data?.data) ? data.data : [];
  }
}
