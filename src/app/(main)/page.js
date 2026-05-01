import LeftSideHome from "../Components/Home/LeftSideHome/LeftSideHome";
import RightSideHome from "../Components/Home/RightSideHome/RightSideHome";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto  bg-base-200 gap-7 flex flex-col sm:flex-row sm:items-center justify-center pt-6">
        <LeftSideHome />
        <RightSideHome />
      </div>
    </div>
  );
}
