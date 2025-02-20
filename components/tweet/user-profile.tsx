import { useUsername } from "@/hooks/use-tweets";
import { useEffect, useState } from "react";

interface UserProfileProps {
  userId: string;
  onUsernameChange: (username: string) => void;
}

export function UserProfile({ userId, onUsernameChange }: UserProfileProps) {
  const { data: user, isLoading } = useUsername(userId);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (user?.username && !isLoading) {
      setInputValue(user.username);
    }
  }, [user?.username, isLoading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() && inputValue !== user?.username) {
      onUsernameChange(inputValue.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  return (
    <div className="mb-4 rounded border p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold">Profile</h2>
          <p className="font-mono text-sm text-gray-500">{userId}</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleSubmit}
            onKeyDown={handleKeyDown}
            className="mr-2 rounded border px-2 py-1"
            placeholder="Username"
          />
        </div>
      </div>
    </div>
  );
}
