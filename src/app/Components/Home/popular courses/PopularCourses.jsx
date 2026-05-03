import { fetchPopularCourseData } from "@/lib/fetchFunc";
import { FaBookOpenReader } from "react-icons/fa6";
import PopularCard from "./PopularCard";

const PopularCourses = async () => {
  const courseData = await fetchPopularCourseData();
  const popCourses = courseData.filter((popC) => popC.popular);
  // console.log(popCourses);
  return (
    <div className="container mx-auto mt-7">
      <div className="flex justify-center items-center gap-2.5">
        <h2 className="text-5xl font-bold text-blue-900">Popular Courses</h2>{" "}
        <FaBookOpenReader size={50} color="#1e3a8a" />
      </div>
      {/* popular course card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-7">
        {popCourses.map((course) => (
          <PopularCard key={course.id} course={course}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
