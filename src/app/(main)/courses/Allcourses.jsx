"use client";
import PopularCard from "@/app/Components/Home/popular courses/PopularCard";
import { useForm } from "react-hook-form";

const Allcourses = ({ courses }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleSearch = (data) => {};
  // console.log(courses[0].title);
  // console.log(watch("search"));
  const searchValue = watch("search");

  const filterCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchValue?.toLowerCase() || ""),
  );
  // console.log(filterCourses);
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
        {/* offer courses */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <p className="pt-7 text-2xl font-bold text-gray-800 text-center md:text-left">
            Offered Courses:
          </p>
          {/* search bar features */}
          <div className="flex justify-center md:justify-end">
            <form
              onSubmit={handleSubmit(handleSearch)}
              className="flex justify-center"
            >
              <div className="join">
                <div>
                  <label className="input validator join-item">
                    <input
                      type="text"
                      placeholder="Enter Book title"
                      {...register("search", { required: true })}
                    />
                  </label>
                  <div className="validator-hint hidden">Enter book title</div>
                </div>
                <button type="submit" className="btn btn-neutral join-item">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* all courses cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 py-7">
          {!filterCourses
            ? courses.map((course) => (
                <PopularCard key={course.id} course={course}></PopularCard>
              ))
            : filterCourses.map((course) => (
                <PopularCard key={course.id} course={course}></PopularCard>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Allcourses;
