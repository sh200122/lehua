'use client'
import { KeyTextField } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";

type VideoProps = {
  youTubeID: KeyTextField;
};

// 懒加载的YouTube播放器
export function LazyYouTubePlayer({ youTubeID }: VideoProps) {
    const [isInView,setIsInView]=useState(false)
    const videoRef=useRef<HTMLIFrameElement>(null)
 
    // 监听组件是否进入视口
    useEffect(()=>{
        const currentContainerRef=videoRef.current
        // 创建一个IntersectionObserver来监听元素是否在视图中
        const observer=new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setIsInView(true)
            }
        },
        {threshold:0.1,rootMargin:'1500px'}
    )  
    if(currentContainerRef){
        observer.observe(currentContainerRef)
    }
    return ()=>{
        if(currentContainerRef){
            observer.unobserve(currentContainerRef)
        }
    }
    },[])
  return (
    <div className="relative h-full w-full" ref={videoRef}>
        {isInView && (
            <iframe
            src={`https://www.youtube-nocookie.com/embed/${youTubeID}?autoplay=1&mute=1&loop=1&playlist=${youTubeID}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="pointer-events-none h-full w-full border-0"
        />
        )}
    </div>
  );
}