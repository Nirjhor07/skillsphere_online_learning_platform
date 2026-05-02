import PopularCard from "@/app/Components/Home/popular courses/PopularCard";

const Allcourses = ({ courses }) => {
  return (
    <div className="bg-linear-to-b from-violet-50 via-blue-50 py-16 px-4 min-h-screen">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            All Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of expert-led courses designed to help you
            build skills, grow your career, and achieve your learning goals.
          </p>
        </div>
        <p className="pt-7 text-2xl md:text-2xl font-bold text-gray-800 mb-4 text-center sm:text-left">
          Offered Courses:
        </p>
        {/* all courses cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-7">
          {courses.map((course) => (
            <PopularCard key={course.id} course={course}></PopularCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allcourses;
