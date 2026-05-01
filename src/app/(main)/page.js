import LeftSideHome from "../Components/Home/LeftSideHome/LeftSideHome";
import RightSideHome from "../Components/Home/RightSideHome/RightSideHome";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <p>just uploading on vercel to get the live link </p>

      <div className="container mx-auto grid grid-cols-2 pt-6">
        <LeftSideHome />
        <RightSideHome />
      </div>
    </div>
  );
}
