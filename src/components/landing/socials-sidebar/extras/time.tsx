"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { PHTimeFormatter } from "@/lib/utils";
import { daysUntilBirthday } from "@/lib/config";
import MetiorEffect from "@/components/animations/meteor-effect";

function Night({ time }: { time: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    // Thx Ana
    // https://github.com/AnaArsonist/anahoward.me/blob/b41ec1a5112526c03f4e09bc4226506ce529523f/src/components/time-components/NightComponent.tsx#L35
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }, [canvasRef]);

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden rounded-2xl w-full",
        "bg-sky-900 text-white"
      )}
    >
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden rounded-2xl"
      />

      <div className="md:m-5 m-2 mt-3 md:mt-5 justify-end">
        <div className="flex items-baseline space-x-1 md:space-x-2 opacity-85">
          <div className="rounded-full bg-white w-2 h-2 md:w-5 md:h-5"></div>
          <div className="flex flex-col">
            <div
              className="text-white text-2xl xl:text-4xl font-bold"
              suppressHydrationWarning
            >
              {time}
            </div>
            <div className="text-white text-lg xl:text-2xl font-thin -mt-2">
              in the ph
            </div>
          </div>
        </div>
      </div>

      <MetiorEffect number={20} />
    </div>
  );
}

function Day({ time }: { time: string }) {
  return (
    <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF] w-full overflow-hidden col-span-1 row-span-1">
      <div className="md:m-5 m-2 mt-3 md:mt-5  justify-end">
        <div className="flex items-baseline space-x-1 md:space-x-2 opacity-85">
          <div className="rounded-full bg-white w-2 h-2 md:w-5 md:h-5"></div>
          <div className="flex flex-col">
            <div
              className="text-white font-bold text-2xl xl:text-4xl"
              suppressHydrationWarning
            >
              {time}
            </div>
            <div className="text-white font-thin -mt-2 text-lg xl:text-2xl">
              in the ph
            </div>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden
        animate={{
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="pointer-events-none absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4"
      >
        <motion.div>
          <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
            <div className="bottom-0 right-0 rounded-tl-full bg-white/20 pl-2 pt-2 md:pl-4 md:pt-4">
              <motion.div
                initial={false}
                animate={{ scale: [1, 0.8, 1.1, 1, 1, 1, 2] }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative h-5 w-5 rounded-tl-full bg-yellow-200"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Time() {
  const [time, setTime] = useState(() => new Date());

  const isNight = time.getHours() >= 17 || time.getHours() < 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = PHTimeFormatter.format(time);

  return (
    <div className='w-full h-[6rem] md:h-[12rem] lg:h-[7rem]'>
      <div className="col-span-3 grid shrink-0 grid-cols-2 gap-4 md:col-span-1 [&_>_div]:shrink-0 relative h-full overflow-hidden">
        {isNight ? <Night time={formattedTime} /> : <Day time={formattedTime} />}

        <div className="flex items-center justify-center rounded-2xl w-full bg-indigo-100 text-indigo-500 dark:bg-[#23224c] dark:text-indigo-400">
          <div className="text-center">
            <p className="text-sm">
              <span className="text-xl" suppressHydrationWarning>
                {daysUntilBirthday}
              </span>{" "}
              days
              <br />
              until birthday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function Time() {
//   const [time, setTime] = useState(() => new Date());

//   const isNight = time.getHours() >= 17 || time.getHours() < 6;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-2 mt-5">
//       {/* time counter */}
//       <div className="text-white rounded-3xl flex relative overflow-hidden aspect-square">
//         {isNight ? <Night time={time} /> : <Day time={time} />}
//       </div>

//       {/* birthday counter */}
//       <div className="w-full flex items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 dark:bg-[#23224c] dark:text-indigo-400">
//         <div className="text-center">
//           <p className="text-xs">
//             <span className="text-xl">{daysUntilBirthday}</span> days
//             <br />
//             until birthday
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
