"use client";
import Image from "next/image";
import {
  FaStar,
  FaUser,
  FaClock,
  FaBook,
  FaGraduationCap,
  FaGlobe,
  FaCheck,
  FaBoxArchive,
} from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const CourseDetailsLeftSection = ({ course }) => {
  return (
    <div className="lg:col-span-2">
      {/* Course Image */}
      <div className="relative h-96 rounded-xl overflow-hidden shadow-lg mb-6">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="w-full h-full object-cover"
        />
        {course.popular && (
          <div className="absolute top-4 left-4 badge badge-warning text-white">
            Popular
          </div>
        )}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1">
            <FaStar className="text-yellow-400" />
            <span className="font-bold">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 bg-white rounded-full px-3 py-1">
            <FaUser className="text-blue-500" />
            <span className="font-semibold">
              {course.students?.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Title & Basic Info */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>

        <div className="flex flex-wrap gap-4 mb-6 text-gray-700">
          <div className="flex items-center gap-2">
            <FaUser className="text-primary" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBoxArchive className="text-primary" />
            <span>{course.level}</span>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8">{course.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {course.tags?.map((tag, index) => (
            <span
              key={index}
              className="badge badge-lg badge-primary badge-outline"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Course Overview Section */}
      <div className="card bg-base-100 shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
        <p className="text-gray-700 mb-6">{course.courseDetails?.overview}</p>

        {/* What You'll Learn */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaGraduationCap className="text-primary" />
            What Youll Learn
          </h3>
          <ul className="space-y-2">
            {course.courseDetails?.whatYouWillLearn?.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <FaCheck className="text-green-500 shrink" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div>
          <h3 className="text-xl font-bold mb-3">Requirements</h3>
          <ul className="space-y-2">
            {course.courseDetails?.requirements?.map((req, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <FaCheck className="text-blue-500" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card bg-base-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <FaBook className="text-primary text-xl" />
            <span className="text-sm text-gray-600">Lessons</span>
          </div>
          <p className="text-2xl font-bold">{course.lessons}</p>
        </div>

        <div className="card bg-base-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <FaGlobe className="text-primary text-xl" />
            <span className="text-sm text-gray-600">Language</span>
          </div>
          <p className="text-2xl font-bold">{course.language}</p>
        </div>

        <div className="card bg-base-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <FaGraduationCap className="text-primary text-xl" />
            <span className="text-sm text-gray-600">Certificate</span>
          </div>
          <p className="text-lg font-bold">
            {course.certificate ? "Yes" : "No"}
          </p>
        </div>

        <div className="card bg-base-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-primary text-xl" />
            <span className="text-sm text-gray-600">Updated</span>
          </div>
          <p className="text-sm font-bold">
            {new Date(course.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsLeftSection;
