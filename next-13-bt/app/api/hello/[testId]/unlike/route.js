//dynamic route
import { NextResponse } from 'next/server';
export async function GET(request, { params }) {
  const { testId } = params;
  return NextResponse.json({ id: testId });
}

// localhost:3000/api/hello/123/unlike