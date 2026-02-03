import { NextRequest, NextResponse } from "next/server";

const BASE_URL = 'https://exchange-example.switchflow.biz';

export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url');
    if (!url) throw new Error('URL_REQUIRED');

    const params = req.nextUrl.searchParams;
    params.delete('url');

    const res = await fetch(`${BASE_URL}${url}?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': req.headers.get('Content-Type') ?? 'application/json',
        'Authorization': req.headers.get('Authorization') ?? '',
      },
    });

    return new NextResponse(await res.text(), {
      status: res.status,
      headers: res.headers,
    });
  } catch (error) {
    const message = (error as Error)?.message ?? 'PROXY ERROR';
    return new NextResponse(JSON.stringify({message}), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url');
    if (!url) throw new Error('URL_REQUIRED');

    const bodyData = await req.json();

    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': req.headers.get('Content-Type') ?? 'application/json',
        'Authorization': req.headers.get('Authorization') ?? '',
      },
      body: bodyData ? JSON.stringify(bodyData) : undefined,
    });

    return new NextResponse(await res.text(), {
      status: res.status,
      headers: res.headers,
    });
  } catch (error) {
    const message = (error as Error)?.message ?? 'PROXY ERROR';
    return new NextResponse(JSON.stringify({message}), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url');
    if (!url) throw new Error('URL_REQUIRED');

    const bodyData = await req.json();

    const res = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': req.headers.get('Content-Type') ?? 'application/json',
        'Authorization': req.headers.get('Authorization') ?? '',
      },
      body: bodyData ? JSON.stringify(bodyData) : undefined,
    });

    return new NextResponse(await res.text(), {
      status: res.status,
      headers: res.headers,
    });
  } catch (error) {
    const message = (error as Error)?.message ?? 'PROXY ERROR';
    return new NextResponse(JSON.stringify({message}), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const url = req.nextUrl.searchParams.get('url');
    if (!url) throw new Error('URL_REQUIRED');

    const params = req.nextUrl.searchParams;
    params.delete('url');

    const res = await fetch(`${BASE_URL}${url}?${params.toString()}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': req.headers.get('Content-Type') ?? 'application/json',
        'Authorization': req.headers.get('Authorization') ?? '',
      },
    });

    return new NextResponse(await res.text(), {
      status: res.status,
      headers: res.headers,
    });
  } catch (error) {
    const message = (error as Error)?.message ?? 'PROXY ERROR';
    return new NextResponse(JSON.stringify({message}), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

