"use client";

import * as THREE from "three";
import { Skateboard } from "@/components/Skatebord";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import gsap from "gsap";

type Props = {
  deckTextureURL: string;
  wheelTextureURL: string;
  truckColor: string;
  boltColor: string;
};

export default function InteractiveSkateboard({
  deckTextureURL,
  wheelTextureURL,
  truckColor,
  boltColor,
}: Props) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas
        className="min-h-[60rem] w-full"
        camera={{ position: [1.5, 1, 1.4], fov: 55 }}
      >
        <Suspense>
          <Scene
            deckTextureURL={deckTextureURL}
            wheelTextureURL={wheelTextureURL}
            truckColor={truckColor}
            boltColor={boltColor}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene({
  deckTextureURL,
  wheelTextureURL,
  truckColor,
  boltColor,
}: Props) {
  const containRef = useRef<THREE.Group>(null);

  function onClick(event: ThreeEvent<MouseEvent>) {
    event.stopPropagation();

    const board = containRef.current;

    if (!board) return;

    const { name } = event.object;

    gsap
      .timeline()
      .to(board.position, {
        y: 0.8,
        duration: 0.51,
        ease: "power2.out",
        delay: 0.26,
      })
      .to(board.position, {
        y: 0,
        duration: 0.43,
        ease: "power2.in",
      });

    gsap
      .timeline()
      .to(board.rotation, { x: -0.6, duration: 0.26, ease: "none" })
      .to(board.rotation, { x: 0.4, duration: 0.82, ease: "power2.in" })
      .to(board.rotation, { x: 0, duration: 0.12, ease: "none" });
  }
  return (
    <group>
      {/* 轨道控制器 */}
      <OrbitControls />
      {/* 环境,使用hdr文件 */}
      <Environment files={"/hdr/warehouse-256.hdr"} />
      {/* 滑板 */}
      <group ref={containRef}>
        <Skateboard
          wheelTextureURLs={[wheelTextureURL]}
          wheelTextureURL={wheelTextureURL}
          deckTextureURLs={[deckTextureURL]}
          deckTextureURL={deckTextureURL}
          truckColor={truckColor}
          boltColor={boltColor}
          constantWheelSpin
        />
        <mesh position={[0, 0.27, 0]} name="middle" onClick={onClick}>
          <boxGeometry args={[0.6, 0.1, 2.2]} />
          <meshBasicMaterial visible={true} />
        </mesh>
      </group>
      {/* 阴影 */}
      <ContactShadows opacity={0.6} position={[0, -0.08, 0]} />
    </group>
  );
}
