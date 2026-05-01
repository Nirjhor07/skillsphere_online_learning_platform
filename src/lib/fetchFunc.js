export const fetchPopularCourseData = async () => {
  const res = await fetch("https://fake-live-server-json.onrender.com/courses");
  return res.json();
};
