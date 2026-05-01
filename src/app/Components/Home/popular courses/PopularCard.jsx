import Image from "next/image";
import { FaClock, FaStar, FaUser } from "react-icons/fa6";

const PopularCard = ({ course }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <figure className="relative">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />

        {/* Popular Badge */}
        {course.popular && (
          <div className="badge badge-warning absolute top-2 left-2">
            Popular
          </div>
        )}
      </figure>

      {/* Body */}
      <div className="card-body">
        {/* Title */}
        <h2 className="card-title text-lg font-bold line-clamp-2">
          {course.title}
        </h2>

        {/* Instructor */}
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <FaUser /> {course.instructor}
        </p>

        {/* Info Row */}
        <div className="flex justify-between text-sm mt-2 text-gray-600">
          <span className="flex items-center gap-1">
            <FaClock /> {course.duration}
          </span>

          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-500" /> {course.rating}
          </span>
        </div>

        {/* Level + Category */}
        <div className="flex gap-2 mt-3">
          <div className="badge badge-info">{course.level}</div>
          <div className="badge badge-outline">{course.category}</div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {course.description}
        </p>

        {/* Button */}
        <div className="card-actions justify-end mt-3">
          <button className="btn btn-primary btn-sm">View Course</button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
