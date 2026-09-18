import React, { useState, useEffect } from "react";
import { hourglass } from "../../assets/images";
import CustomModal from "../../components/CustomModal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface LaunchCountdownProps {
  targetDate?: Date | string;
}

export const LaunchCountdown: React.FC<LaunchCountdownProps> = ({
  // Set launch date to September 21st, 2026 at 00:00:00
  targetDate = new Date("2026-09-21T00:00:00"),
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  const timerUnits = [
    { label: "DAYS", value: formatNumber(timeLeft.days) },
    { label: "HOURS", value: formatNumber(timeLeft.hours) },
    { label: "MINUTES", value: formatNumber(timeLeft.minutes) },
    { label: "SECONDS", value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full sm:max-w-md mx-auto p-8 rounded-3xl bg-[#F6F5E3] text-gray-900 font-sans">
      {/* Hourglass Icon Container */}
      <div className="relative mb-6 flex items-center justify-center p-3 bg-[#9FABF9]/20 rounded-2xl">
        <img
          src={hourglass}
          alt="Hourglass"
          className="w-12 h-12 text-[#1E40AF] animate-pulse"
        />
      </div>

      {/* Heading */}
      <h1 className="!text-2xl font-bold tracking-tight text-black text-center mb-8">
        Days until launch.
      </h1>

      {/* Countdown Timer Cards */}
      <div className="grid grid-cols-4 text-black gap-3 w-full mb-10">
        {timerUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              style={{
                background:
                  "linear-gradient(180deg, #0929A0 48.21%, #6483F7 50%)",
              }}
              className="relative w-full aspect-square rounded-2xl p-0.5 shadow-md overflow-hidden flex items-center justify-center"
            >
              {/* Glossy top overlay */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-white/10 rounded-t-2xl pointer-events-none" />
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                {unit.value}
              </span>
            </div>
            <span className="mt-2 text-xs sm:text-sm !font-normal tracking-wider">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Subheading */}
      <p className="text-base font-semibold text-center text-gray-900 mb-4">
        Be among the first to send and earn.
      </p>

      {/* Waitlist Form & States */}
      <div className="w-full flex flex-col gap-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white text-sm font-semibold shadow-md hover:opacity-95 active:scale-95 transition-all flex items-center justify-center"
        >
          Join Waitlist
        </button>
      </div>

      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default LaunchCountdown;