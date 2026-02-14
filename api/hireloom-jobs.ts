import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const hireloomRes = await fetch('https://hireloom-official.vercel.app/api/public/jobs/nexacore');

    if (!hireloomRes.ok) {
      return response.status(hireloomRes.status).json({ error: 'Failed to fetch jobs from Hireloom' });
    }

    const data = await hireloomRes.json();

    // Return the JSON response directly
    return response.status(200).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
