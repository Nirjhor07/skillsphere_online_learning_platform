import LearningTips from "../Components/Home/Learning Tips Section/LearningTips";
import LeftSideHome from "../Components/Home/LeftSideHome/LeftSideHome";
import PopularCourses from "../Components/Home/popular courses/PopularCourses";
import RightSideHome from "../Components/Home/RightSideHome/RightSideHome";
import StatCards from "../Components/Shared/StatCards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto  bg-base-200 gap-7 flex flex-col sm:flex-row sm:items-center justify-center pt-6 mb-7">
        <LeftSideHome />
        <RightSideHome />
      </div>
      {/* stats card */}
      <div>
        <StatCards></StatCards>
      </div>
      {/* popular courses */}
      <div className="mt-4">
        <PopularCourses />
      </div>
      {/* learning tips section */}
      <LearningTips />
    </div>
  );
}
