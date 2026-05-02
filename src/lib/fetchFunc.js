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

// course details page function fetch course by id
export const courseDetails = async (id) => {
  const res = await fetch(
    `https://fake-live-server-json.onrender.com/courses/${id}`,
  );
  return res.json();
};
