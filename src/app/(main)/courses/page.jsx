import { fetchPopularCourseData } from "@/lib/fetchFunc";
import Allcourses from "./Allcourses";

export const metadata = {
  title: "All Courses",
  description: "Explore all available courses",
};

export default async function AllCoursesPage() {
  const courses = await fetchPopularCourseData();
  return (
    <div>
      <Allcourses courses={courses} />
    </div>
  );
}
