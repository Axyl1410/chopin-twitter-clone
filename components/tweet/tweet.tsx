import { useUsername } from "@/hooks/use-tweets";
import { formatDistanceToNow } from "date-fns";

interface TweetProps {
  content: string;
  userId: string;
  timestamp: Date;
  onUsernameClick: (userId: string) => void;
}

export function Tweet({
  content,
  userId,
  timestamp,
  onUsernameClick,
}: TweetProps) {
  const { data: user, isLoading } = useUsername(userId);
  const username = isLoading ? "Loading..." : user?.username || "Unknown";

  return (
    <div className="border-b p-4">
      <div className="mb-2 flex items-center">
        <button
          onClick={() => onUsernameClick(userId)}
          className="font-bold hover:underline"
        >
          {username}
        </button>
        <span className="ml-2 text-sm text-gray-500">
          {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
        </span>
      </div>
      <p className="whitespace-pre-wrap">{content}</p>
    </div>
  );
}
