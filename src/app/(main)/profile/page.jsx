"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useForm } from "react-hook-form";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  // console.log(session?.user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleProfileForm = async (data) => {
    const { name, Photo_Url } = data;
    const updateData = {};

    // Only add fields that have values
    if (name && name.trim()) {
      updateData.name = name;
    }

    if (Photo_Url && Photo_Url.trim()) {
      updateData.image = Photo_Url;
    }

    // Only update if there at least one field to update
    if (Object.keys(updateData).length > 0) {
      await authClient.updateUser(updateData);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-8">
        {/* Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
          My Profile
        </h1>

        {/* Profile Info Display */}
        <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gray-100 rounded-lg">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-200 flex items-center justify-center border-4 border-blue-500 relative overflow-hidden flex-shrink-0">
              {session?.user.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "Profile name"}
                  fill
                  className="object-cover"
                />
              ) : (
                // didnt get it i used gpt here
                <span className="text-2xl md:text-3xl text-blue-600 font-semibold">
                  {session?.user.name?.[0]?.toUpperCase() || "U"}
                </span>
              )}
            </div>
            <div className="ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                {session?.user.name}
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {session?.user.email}
              </p>
              {/* <p className="text-xs md:text-sm text-gray-500 mt-2">{session?.user.date}</p> */}
            </div>
          </div>
        </div>

        {/* Update Form */}
        <form
          onSubmit={handleSubmit(handleProfileForm)}
          className="space-y-4 md:space-y-6"
        >
          <div>
            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
              Profile Image URL
            </label>
            <input
              type="url"
              {...register("Photo_Url")}
              placeholder="Enter image URL"
              className="w-full px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              Paste the direct URL of your Facebook profile image (e.g.,
              https://graph.facebook.com/user-id/picture?). Make sure the image
              is publicly accessible.
            </p>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white text-sm md:text-base font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfilePage;
