"use client";

import { useEffect, useRef, useState } from "react";
type Card = {
  title: string;
  description?: string;
  imageSrc?: string;
  thumbnail?: string;
  popup?: boolean;
};

type Props = {
  items: Card[];
};

export default function CardGrid({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openItem = openIndex !== null ? items[openIndex] : null;
  const isGif = (src?: string) =>
    typeof src === "string" && src.toLowerCase().trim().endsWith(".gif");
  const isMp4 = (src?: string) =>
    typeof src === "string" && src.toLowerCase().trim().endsWith(".mp4");

  function GifThumbnail({ src, alt }: { src: string; alt: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const containerW = canvas.width;
        const containerH = canvas.height;
        ctx.clearRect(0, 0, containerW, containerH);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, containerW, containerH);
        const scale = Math.min(containerW / img.width, containerH / img.height);
        const drawW = img.width * scale;
        const drawH = img.height * scale;
        const dx = (containerW - drawW) / 2;
        const dy = (containerH - drawH) / 2;
        ctx.imageSmoothingQuality = "high";
        try {
          ctx.drawImage(img, dx, dy, drawW, drawH);
        } catch {
          // ignore
        }
      };
    }, [src]);

    return (
      <canvas
        ref={canvasRef}
        aria-label={alt}
        className="h-full w-auto max-h-full max-w-full object-contain p-3 bg-foreground/5 rounded"
        width={800}
        height={800}
      />
    );
  }

  function GifPreview({ src, alt }: { src: string; alt: string }) {
    const [hover, setHover] = useState(false);
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="h-full w-auto max-h-full max-w-full p-3"
      >
        {hover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="h-full w-auto max-h-full max-w-full object-contain rounded"
          />
        ) : (
          <GifThumbnail src={src} alt={alt} />
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {item.imageSrc ? (
              <div className="h-64 w-full bg-white flex items-center justify-center rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {item.popup ? (
                  <button
                    type="button"
                    aria-label={`Open ${item.title}`}
                    onClick={() => setOpenIndex(idx)}
                    className="outline-none h-full w-auto max-h-full max-w-full object-contain"
                  >
                    {isGif(item.imageSrc) ? (
                      <GifPreview src={item.imageSrc!} alt={item.title} />
                    ) : isMp4(item.imageSrc) ? (
                      <div className="h-full w-full max-h-full grid place-items-center p-3">
                        <div className="aspect-video w-full max-h-full rounded grid">
                          <img src={item.thumbnail!} 
                          alt={item.title}  
                          className="h-full w-auto max-h-full max-w-full object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
                        </div>
                      </div>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt={item.title}
                        src={item.imageSrc}
                        className="h-full w-auto max-h-full max-w-full object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                      />
                    )}
                  </button>
                ) : (
                  isGif(item.imageSrc) ? (
                    <GifPreview src={item.imageSrc!} alt={item.title} />
                  ) : isMp4(item.imageSrc) ? (
                    <div className="h-full w-full grid place-items-center p-3">
                      <div className="aspect-video w-full rounded border border-black/10 bg-foreground/5 grid place-items-center">
                        <span className="text-xs text-foreground/60">Video</span>
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={item.title}
                      src={item.imageSrc}
                      className="h-full w-auto max-h-full max-w-full object-contain p-3 transition-transform duration-300 ease-out group-hover:scale-[1.05]"
                    />
                  )
                )}
              </div>
            ) : (
              <div className="h-64 w-full bg-foreground/5" />
            )}
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
              {item.description ? (
                <p className="mt-1 text-sm text-foreground/70 line-clamp-3">
                  {item.description}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {openItem ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpenIndex(null)}
              className="absolute -top-3 -right-3 rounded-full bg-white text-black shadow p-2 w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            {isMp4(openItem.imageSrc) ? (
              <video
                className="block h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain bg-black rounded"
                controls
                autoPlay
              >
                <source src={openItem.imageSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={openItem.imageSrc}
                alt={openItem.title}
                className="block h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain bg-white rounded"
              />
            )}
            <div className="mt-2 text-center text-sm text-white/90">{openItem.title}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


