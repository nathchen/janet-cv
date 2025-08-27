type MotionPlayerProps = {
  src: string;
  poster?: string;
  alt?: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

function getExtension(url: string): string | null {
  try {
    const clean = url.split("?")[0].split("#")[0];
    const parts = clean.split(".");
    return parts.length > 1 ? parts.pop()!.toLowerCase() : null;
  } catch {
    return null;
  }
}

export default function MotionPlayer({
  src,
  poster,
  alt = "",
  className,
  controls = false,
  autoPlay,
  loop = true,
  muted,
}: MotionPlayerProps) {
  const ext = getExtension(src);
  const isGif = ext === "gif";
  const isMp4 = ext === "mp4";

  if (isGif) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        className={
          className ?? "w-full h-auto rounded-lg border border-black/10"
        }
        loading="lazy"
      />
    );
  }

  if (isMp4) {
    const shouldAutoPlay = autoPlay ?? true;
    const shouldMuted = muted ?? true;
    return (
      <video
        className={
          className ?? "w-full h-auto rounded-lg border border-black/10"
        }
        playsInline
        controls={controls}
        autoPlay={shouldAutoPlay}
        muted={shouldMuted}
        loop={loop}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  // Fallback: attempt <img>, otherwise show a simple box
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      className={className ?? "w-full h-auto rounded-lg border border-black/10"}
      loading="lazy"
    />
  );
}
