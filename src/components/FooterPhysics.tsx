"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bodies,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World,
} from "matter-js";

type FooterPhysicsProps = {
  boardTextureURLs: string[];
  className?: string;
};

export function FooterPhysics({
  boardTextureURLs = [],
  className,
}: FooterPhysicsProps) {
  // 引用容器div元素
  const scene = useRef<HTMLDivElement>(null);
  // 创建引擎
  const engine = useRef(Engine.create());
  // 是否在视口中
  const [inView, setInView] = useState(false);
  // 是否是移动端
  const [isMobile, setIsMobile] = useState(false);

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const limitedBoardTextures = isMobile
    ? boardTextureURLs.slice(0, 3) // 移动端只显示3个
    : boardTextureURLs;

  useEffect(() => {
    const currentScene = scene.current;
    // 监测组件何时进入视口
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // 当组件进入视口的50%时触发
    );

    if (currentScene) observer.observe(currentScene);

    return () => {
      if (currentScene) observer.unobserve(currentScene);
    };
  }, []);

  useEffect(() => {
    // 如果组件不在视口中，或者没有场景，则不执行
    if (!scene.current || !inView) return;
    // 如果用户偏好减少动画，则不执行
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;
    // 获取场景的宽度和高度
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;
    // 设置重力，使板子下落缓慢
    engine.current.gravity.y = 0.5;
    // 创建渲染器
    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        pixelRatio: window.devicePixelRatio, // 使用设备的像素比
        wireframes: false, // 不显示线框
        background: "transparent", // 背景透明
      },
    });
    // 创建边界
    let boundaries = createBoundaries(cw, ch);
    World.add(engine.current.world, boundaries);

    // 创建鼠标
    const mouse = Mouse.create(render.canvas);
    // @ts-expect-error - matter.js has incorrect types
    mouse.element.removeEventListener("wheel", mouse.mousewheel); // 移除鼠标滚轮事件

    const mouseConstraint = MouseConstraint.create(engine.current, {
      mouse,
      constraint: {
        stiffness: 0.2, // 约束的刚度,拖动时更顺滑
        render: { visible: false }, // 不显示鼠标约束
      },
    });
    World.add(engine.current.world, mouseConstraint);

    // 监听窗口大小变化
    window.addEventListener("resize", onResize);

    function onResize() {
      if (!scene.current) return;

      const cw = scene.current.clientWidth;
      const ch = scene.current.clientHeight;
      // 更新渲染器的大小
      render.canvas.width = cw;
      render.canvas.height = ch;
      render.options.width = cw;
      render.options.height = ch;
      // 更新渲染器的像素比
      Render.setPixelRatio(render, window.devicePixelRatio);
      // 移除旧的边界
      World.remove(engine.current.world, boundaries);
      boundaries = createBoundaries(cw, ch);
      World.add(engine.current.world, boundaries);
    }

    function createBoundaries(width: number, height: number) {
      return [
        Bodies.rectangle(width / 2, -10, width, 20, { isStatic: true }), // 顶部边界，位于容器上面10px
        Bodies.rectangle(-10, height / 2, 20, height, { isStatic: true }), // 左侧边界，位于容器左侧10px
        Bodies.rectangle(width / 2, height + 10, width, 20, { isStatic: true }), // 底部边界，位于容器底部10px
        Bodies.rectangle(width + 10, height / 2, 20, height, {
          isStatic: true,
        }), // 右侧边界,位于容器右侧10px
      ];
    }

    // 创建运行器
    const runner = Runner.create();
    Runner.run(runner, engine.current);
    // 运行渲染器
    Render.run(render);

    const currentEngine = engine.current;

    return () => {
      window.removeEventListener("resize", onResize);

      Render.stop(render);
      Runner.stop(runner);
      if (currentEngine) {
        World.clear(currentEngine.world, false);
        Engine.clear(currentEngine);
      }
      render.canvas.remove();
      render.textures = {};
    };
  }, [inView]);

  useEffect(() => {
    if (!scene.current || !inView) return;

    const world = engine.current.world;
    const cw = scene.current.clientWidth;
    const ch = scene.current.clientHeight;
    // 创建板子
    const boards = limitedBoardTextures.map((texture) => {
      // 随机位置，位于容器中间偏上
      const x = Math.random() * cw;
      const y = Math.random() * (ch / 2 - 100) + 50;
      const rotation = ((Math.random() * 100 - 50) * Math.PI) / 180; // 随机旋转角度
      // 物理属性
      return Bodies.rectangle(x, y, 80, 285, {
        chamfer: { radius: 40 }, // 圆角矩形
        angle: rotation,
        restitution: 0.8, // 高弹性
        friction: 0.005, // 低摩擦
        render: {
          sprite: {
            texture, // 使用纹理
            // 缩放
            xScale: 0.5,
            yScale: 0.5,
          },
        },
      });
    });

    if (boards.length > 0) {
      // 把所有板子添加到物理世界
      World.add(engine.current.world, boards);
    }

    return () => {
      //清理
      World.remove(world, boards);
    };
  }, [limitedBoardTextures, inView]);

  return <div ref={scene} className={className} />;
}
