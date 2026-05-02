"use client";

import CourseDetailsLeftSection from "./CourseDetailsLeftSection";
import CourseDetailsSidebar from "./CourseDetailsSidebar";

const CourseDetailsCard = ({ course }) => {
  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <CourseDetailsLeftSection course={course} />
          <CourseDetailsSidebar course={course} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsCard;
