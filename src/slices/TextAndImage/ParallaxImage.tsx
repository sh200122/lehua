"use client";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

type Props = {
  foregroundImage: ImageField;
  backgroundImage: ImageField;
  className?: string;
};

export default function ParallaxImage({
  foregroundImage,
  backgroundImage,
  className,
}: Props) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  const targetPosition = useRef({
    x: 0,
    y: 0,
  });
  const currentPosition = useRef({
    x: 0,
    y: 0,
  });

  // 视差效果
  useEffect(() => {
    // 创建一个动画帧
    const frameId = requestAnimationFrame(animateFrame);
    // 添加鼠标移动事件
    window.addEventListener("mousemove", onMouseMove);

    // 鼠标移动事件
    function onMouseMove(event: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      const xPercent = (event.clientX / innerWidth - 0.5) * 2;
      const yPercent = (event.clientY / innerHeight - 0.5) * 2;

      // 控制移动范围
      targetPosition.current = {
        x: xPercent * -20,
        y: yPercent * -20,
      };
    }

    function animateFrame() {
      // 目标位置   
      const { x: targetX, y: targetY } = targetPosition.current;
      // 当前位置
      const { x: currentX, y: currentY } = currentPosition.current;

      // 缓动效果
      const newX = currentX + (targetX - currentX) * 0.1;
      const newY = currentY + (targetY - currentY) * 0.1;

      currentPosition.current = { x: newX, y: newY };

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }

      // 前景图是背景图的2.5倍，创造深感效果
      if (foregroundRef.current) {
        foregroundRef.current.style.transform = `translate(${newX * 2.5}px, ${newY * 2.5}px)`;
      }

      requestAnimationFrame(animateFrame);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);
  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
      <div
        ref={backgroundRef}
        className="col-start-1 row-start-1 transition-transform"
      >
        <PrismicNextImage field={backgroundImage} alt="" className="w-11/12" />
      </div>
      <div
        ref={foregroundRef}
        className="col-start-1 row-start-1 transition-transform h-full w-full place-items-center"
      >
        <PrismicNextImage
          field={foregroundImage}
          alt=""
          imgixParams={{ height: 600 }}
          className="h-full max-h-[500px] w-auto"
        />
      </div>
    </div>
  );
}
