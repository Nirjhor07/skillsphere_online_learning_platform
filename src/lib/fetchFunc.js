export const fetchPopularCourseData = async () => {
  const res = await fetch("https://fake-live-server-json.onrender.com/courses");
  return res.json();
};

export const fetchTeacher = async () => {
  const res = await fetch(
    "https://fake-live-server-json.onrender.com/teachers",
  );
  return res.json();
};
