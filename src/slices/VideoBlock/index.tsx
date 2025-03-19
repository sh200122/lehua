import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { LazyYouTubePlayer } from "./LazyYouTubePlayer";
import clsx from "clsx";
import Image from "next/image";

const HASK_CLASSES="[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-size:100%_auto] [mask-repeat:no-repeat]"

/**
 * Props for `VideoBlock`.
 */
export type VideoBlockProps = SliceComponentProps<Content.VideoBlockSlice>;

/**
 * Component for "VideoBlock" Slices.
 */
const VideoBlock: FC<VideoBlockProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-zinc-900"
    >
      <h2 className="sr-only">Video Reel</h2>
      <div className="aspect-video relative">
        <div
          className={clsx(
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3",
            HASK_CLASSES
          )}
        />
        <div
          className={clsx(
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2",
            HASK_CLASSES
          )}
        />
        <div
          className={clsx(
            "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3",
            HASK_CLASSES
          )}
        />
        <div className={clsx(HASK_CLASSES,"relative h-full")}>
          {isFilled.keyText(slice.primary.youtube_video_id) ? (
            <LazyYouTubePlayer youTubeID={slice.primary.youtube_video_id} />
          ) : null}
        <Image src='/image-texture.png' alt='' fill className="pointer-events-none object-cover opacity-50" />
        </div>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
