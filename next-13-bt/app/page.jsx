'use client';
import { useEffect, useState } from 'react';
import CourseSearch from './componets/CourseSearch';
import Courses from './componets/Courses';
import LoadingPage from './loading';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);
  const handleSearchedCourse = (results) => {
    setCourses(results);
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Traversy Meida</h1>
      <CourseSearch getSearchResults={handleSearchedCourse} />
      <Courses courses={courses} />
    </>
  );
};
export default HomePage;
