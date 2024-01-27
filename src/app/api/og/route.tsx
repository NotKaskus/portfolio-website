import { type NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';

import { meta } from '@/lib/config';

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const title = params.get('title');

  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#222222",
            color: "#eaeaea",
            fontSize: 35,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              marginTop: "2rem",
              marginBottom: "auto",
              fontSize: 100,
              paddingLeft: "1em",
              paddingRight: "1em",
              color: "#818cf8",
              fontWeight: 800,
              display: 'flex'
            }}
          >
            <p style={{
              fontSize: '130px'
            }}>
              {title}
            </p>
          </div>
          <div
            style={{
              marginBottom: "2em",
              marginLeft: "2em",
              display: "flex",
              alignItems: "center",
              fontWeight: 600
            }}
          >
            <p style={{ 
              marginLeft: '3rem',
              marginTop: '3rem',
              fontSize: '70px'
            }}>
              {meta.author}
            </p>
            <img
              src={`https://alexanderkonietzko.vercel.app/static/images/konietzko_alexander.png`}
              alt={meta.siteName}
              style={{
                width: '5em',
                marginLeft: 'auto',
                marginRight: '2em',
            }}/>
          </div>
        </div>
      ),
      {
        width: 1820,
        height: 980,
      },
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  };
}
