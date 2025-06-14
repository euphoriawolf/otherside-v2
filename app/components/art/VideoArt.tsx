import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

interface VideoArtProps {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
  autoplayOnHover?: boolean;
  autoplayOnVisible?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
}

export function VideoArt({
  src,
  poster,
  alt,
  className,
  autoplayOnHover = true,
  autoplayOnVisible = false,
  muted = true,
  loop = true,
  controls = false,
  aspectRatio = "landscape",
}: VideoArtProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Intersection Observer for visibility detection
  useEffect(() => {
    if (!autoplayOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [autoplayOnVisible]);

  // Handle video playback based on hover and visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const shouldPlay =
      (autoplayOnHover && isHovered) || (autoplayOnVisible && isVisible);

    if (shouldPlay && !isPlaying) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.warn("Video autoplay failed:", error);
        });
    } else if (!shouldPlay && isPlaying) {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered, isVisible, isPlaying, autoplayOnHover, autoplayOnVisible]);

  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-gray-100 group",
        aspectRatioClasses[aspectRatio],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        poster={poster}
        muted={muted}
        loop={loop}
        controls={controls}
        playsInline
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          {alt}
        </div>
      </video>

      {/* Play indicator */}
      {isPlaying && (
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      )}

      {/* Overlay for additional content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
