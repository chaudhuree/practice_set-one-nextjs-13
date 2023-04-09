import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  // http://localhost:3000/api/courses/search?query=next&name=chaudhuree
  // searchParams.get('query') => next
  // searchParams.get('name') => chaudhuree
  const query = searchParams.get('query');
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredCourses);
}
