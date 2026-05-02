"use client";
import {
  FaStar,
  FaUser,
  FaClock,
  FaBook,
  FaGraduationCap,
  FaChartColumn,
} from "react-icons/fa6";

const CourseDetailsSidebar = ({ course }) => {
  return (
    <div className="lg:col-span-1">
      <div className="card bg-base-100 shadow-xl sticky top-20 p-6">
        {/* Price */}
        <div className="mb-6">
          <p className="text-gray-600 text-sm mb-1">Course Price</p>
          <p className="text-4xl font-bold text-primary">${course.price}</p>
        </div>

        {/* Enrollment Button */}
        <button className="btn btn-primary btn-lg w-full mb-4">
          Enroll Now
        </button>

        {/* Info Items */}
        <div className="space-y-4 border-t pt-4">
          <div className="flex items-start gap-3">
            <FaClock className="text-primary mt-1 shrink" />
            <div>
              <p className="font-semibold">Duration</p>
              <p className="text-sm text-gray-600">{course.duration}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaBook className="text-primary mt-1 shrink" />
            <div>
              <p className="font-semibold">Lessons</p>
              <p className="text-sm text-gray-600">{course.lessons} lessons</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaChartColumn className="text-primary mt-1 shrink" />
            <div>
              <p className="font-semibold">Level</p>
              <p className="text-sm text-gray-600">{course.level}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaUser className="text-primary mt-1 shrink" />
            <div>
              <p className="font-semibold">Students</p>
              <p className="text-sm text-gray-600">
                {course.students?.toLocaleString()} enrolled
              </p>
            </div>
          </div>

          {course.certificate && (
            <div className="flex items-start gap-3">
              <FaGraduationCap className="text-green-500 mt-1 shrink" />
              <div>
                <p className="font-semibold">Certificate</p>
                <p className="text-sm text-gray-600">Included</p>
              </div>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="mt-4 pt-4 border-t">
          <span className="badge badge-lg badge-secondary">
            {course.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsSidebar;
