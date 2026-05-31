import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UserProfileData {
  name: string;
  username: string;
  profile_image: string;
  location?: string;
  website_url?: string;
  joined_at?: string;
  github_username?: string;
  twitter_username?: string;
}

export const UserProfile = () => {
  const { username } = useParams<{ username: string }>();

  const [userProfile, setUserProfile] =
    useState<UserProfileData | null>(null);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (!username) {
          throw new Error("User not found");
        }

        const response = await axios.get(
          `https://dev.to/api/users/by_username?url=${username}`
        );

        if (!response.data) {
          throw new Error("User not found");
        }

        setUserProfile(response.data);
      } catch (err) {
        console.error(err);

        setError(
          err instanceof Error
            ? err
            : new Error("Failed to load user profile")
        );
      }
    };

    fetchUserProfile();
  }, [username]);

  if (error) {
    throw error;
  }

  if (!userProfile) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">👨‍💻</div>

          <h1 className="text-3xl font-bold mb-4">
            Loading developer...
          </h1>

          <p className="text-zinc-500">
            Looking through commits and Stack Overflow posts...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <img
          src={userProfile.profile_image}
          alt={userProfile.name}
          className="h-20 w-20 rounded-full ring-1 ring-zinc-700"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {userProfile.name}
          </h1>

          <p className="text-zinc-500">
            @{userProfile.username}
          </p>
        </div>
      </div>

      <div
        className="
          rounded-2xl
          border
          border-zinc-200
          dark:border-zinc-800
          bg-white
          dark:bg-zinc-900
          p-6
        "
      >
        <h2 className="font-semibold mb-4">
          Profile Information
        </h2>

        <div className="space-y-3 text-sm">
          <p>
            <span className="text-zinc-500">
              Location:
            </span>{" "}
            {userProfile.location || "Unknown"}
          </p>

          <p>
            <span className="text-zinc-500">
              Website:
            </span>{" "}
            {userProfile.website_url || "Not provided"}
          </p>

          <p>
            <span className="text-zinc-500">
              Joined:
            </span>{" "}
            {userProfile.joined_at || "Unknown"}
          </p>

          <p>
            <span className="text-zinc-500">
              GitHub:
            </span>{" "}
            {userProfile.github_username || "Not linked"}
          </p>

          <p>
            <span className="text-zinc-500">
              Twitter:
            </span>{" "}
            {userProfile.twitter_username || "Not linked"}
          </p>
        </div>
      </div>

      <div
        className="
          mt-8
          rounded-xl
          border
          border-yellow-500/20
          bg-yellow-500/5
          p-4
          text-sm
          text-yellow-500
        "
      >
        🚧 User profile pages are currently under construction.
        More features coming soon.
      </div>
    </div>
  );
};