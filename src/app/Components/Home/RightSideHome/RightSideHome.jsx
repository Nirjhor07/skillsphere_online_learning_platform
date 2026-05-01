import Image from "next/image";
import Nirjhor from "../../../../assets/images/nir.png";
import { FaUser, FaUserTie, FaUserGraduate, FaUserNinja } from "react-icons/fa";

const RightSideHome = () => {
  return (
    <div className="relative w-full max-w-md bg-purple-300 mx-auto">
      <Image src={Nirjhor} alt="Nirjhor" width={400} height={400} />
    </div>
  );
};

export default RightSideHome;
