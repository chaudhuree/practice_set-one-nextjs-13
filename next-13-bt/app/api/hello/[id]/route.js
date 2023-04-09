//dynamic route
import { NextResponse } from 'next/server';
export async function GET(request, { params }) {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get('name');
  return NextResponse.json({ message: `Hello, ${params.id}!`, name: name });
}
// localhost:3000/api/hello/123
// localhost:3000/api/hello/123?name=John