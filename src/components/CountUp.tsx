import { useEffect, useState } from "react";

interface CountUpProps {
  value: string;
  start: boolean;
}

export default function CountUp({
  value,
  start,
}: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const target = Number(
      value.replace(/[^\d]/g, "")
    );

    let current = 0;

    const duration = 1800;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, value]);

  const suffix = value.includes("+") ? "+" : "";

  return (
    <>
      {count.toLocaleString("vi-VN")}
      {suffix}
    </>
  );
}
