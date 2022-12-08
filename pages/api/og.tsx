
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default function OgImage() {
  const styling = {
    display: 'flex',
    fontSize: 129,
    background: '#023047',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    width: '100%',
    height: '100%',
  }
  return new ImageResponse(
    (
      <div style={styling}>
        Epoka Clubs
      </div>
    ), {
    width: 1200,
    height: 630,
  },
  );
}
