import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import useSound from "use-sound";

export default function DarkModeToggle({ isMuted }) {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState();
  const [play] = useSound("/sounds/Whit.wav", { soundEnabled: isMuted });

  useEffect(() => {
    setEnabled(theme === "dark" ? false : true);
  }, []);

  return (
    <Switch
      checked={enabled}
      className="sun-moon"
      onChange={() => {
        setEnabled(!enabled);
        setTheme(theme === "dark" ? "light" : "dark");
        play();
      }}
    >
      {enabled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-10 w-10 sm:h-6 sm:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-10 w-10 sm:h-6 sm:w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </Switch>
  );
}
