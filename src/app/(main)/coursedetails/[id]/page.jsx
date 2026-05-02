import { courseDetails } from "@/lib/fetchFunc";
import CourseDetailsCard from "./CourseDetailsCard";

export const metadata = {
  title: "Course Details",
  description: "View detailed course information",
};

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = await courseDetails(id);

  return <CourseDetailsCard course={course} />;
}
