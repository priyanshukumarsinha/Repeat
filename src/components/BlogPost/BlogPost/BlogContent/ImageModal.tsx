import { useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export function ImageModal({
  src,
  alt,
  onClose,
}: ImageModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/80
        p-4
      "
    >
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="
          max-h-[90vh]
          max-w-[90vw]
          rounded-xl
        "
      />
    </div>
  );
}