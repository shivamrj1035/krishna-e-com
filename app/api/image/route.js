import { decryptImageUrl } from '@/utils/crypto';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get('data');

  if (!data) {
    return new Response('Missing image data', { status: 400 });
  }

  const imageUrl = decryptImageUrl(data);

  if (!imageUrl) {
    return new Response('Invalid image data', { status: 403 });
  }

  try {
    const response = await fetch(imageUrl);
    const contentType = response.headers.get('content-type');
    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      headers: {
        'Content-Type': contentType || 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return new Response('Error fetching image', { status: 500 });
  }
}
