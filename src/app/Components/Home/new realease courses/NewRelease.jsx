import { fetchPopularCourseData } from "@/lib/fetchFunc";
import PopularCard from "../popular courses/PopularCard";

const NewRelease = async () => {
  const courseData = await fetchPopularCourseData();
  const newRCourses = courseData.filter((newR) => newR.newRelease);
  // console.log(popCourses);
  return (
    <div className="container mx-auto mt-7">
      <div className="flex justify-center items-center gap-2.5">
        <h2 className="text-2xl sm:text-5xl font-bold text-blue-900">
          New Release Courses
        </h2>
      </div>
      {/* popular course card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-7">
        {newRCourses.map((course) => (
          <PopularCard key={course.id} course={course}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
