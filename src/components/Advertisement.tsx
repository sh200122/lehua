"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

interface AdProps {
  displayDuration?: number;
  interval?: number;
}

// 15秒后显示广告，广告显示10秒，然后隐藏
export default function Advertisement({ displayDuration = 10000 }: AdProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showAd = () => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, displayDuration);
    };

    const initialTimeout = setTimeout(showAd, 15000);

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [displayDuration]);

  if (!isVisible) return null;

  const handelClick = () => {
    window.open("https://github.com/sh200122/lehua", "_blank");
    setIsVisible(false);
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 grid place-content-center",
        "bg-black/80 backdrop-blur-sm",
        "animate-fadeIn transition-opacity duration-500"
      )}
    >
      <div className="relative bg-white rounded-lg p-8 max-w-2xl mx-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            制作不易，请帮我点亮⭐
          </h2>
          <div
            className="aspect-video bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 rounded-lg"
            onClick={handelClick}
          >
            前往 Github 🐙
          </div>
        </div>
      </div>
    </div>
  );
}
