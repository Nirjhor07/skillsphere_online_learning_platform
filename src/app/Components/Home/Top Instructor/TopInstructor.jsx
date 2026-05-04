import { fetchTeacher } from "@/lib/fetchFunc";
import InstructorCard from "./InstructorCard";

const TopInstructor = async () => {
  const instructors = await fetchTeacher();

  const topInstructor = instructors.filter((topIns) => topIns.isTop);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Top <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn from the best instructors in the industry with proven
            expertise and track records
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topInstructor.map((instructor, index) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructor;
