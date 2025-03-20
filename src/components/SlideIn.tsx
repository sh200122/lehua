"use client";
import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export function SlideIn({ children, delay = 0, duration = 0.6 }: Props) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
 
    // 监听元素是否进去视口内
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 如果元素可见，应用动画并停止观察该元素
        if (entry.isIntersecting) {
          element.style.animation = `slide-in ${duration}s ease ${delay}s forwards`;
          observer.unobserve(element); // 防止重复触发
        }
      },
      // 元素进入视口前150px时触发
      { threshold: 0, rootMargin: "-150px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <div ref={elementRef} className="slide-in-hidden">
      {children}
    </div>
  );
}