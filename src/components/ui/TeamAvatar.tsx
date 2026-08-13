import Image from "next/image";
import { cn } from "@/lib/utils";

interface TeamAvatarProps {
  name: string;
  initials: string;
  photo?: string;
  className?: string;
  textClassName?: string;
}

/**
 * Renders a member photo when `photo` is supplied (drop files in
 * public/team/ and pass e.g. photo="/team/jean-laporte.jpg"). Falls back to
 * an initials badge otherwise, so the layout is ready for real photos
 * without further code changes.
 */
export default function TeamAvatar({
  name,
  initials,
  photo,
  className = "w-24 h-24 rounded-full",
  textClassName = "text-xl",
}: TeamAvatarProps) {
  if (photo) {
    return (
      <div
        className={cn(
          className,
          "relative overflow-hidden shadow-2xl flex-shrink-0"
        )}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes="200px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        className,
        "bg-brand-charcoal flex items-center justify-center shadow-2xl flex-shrink-0"
      )}
    >
      <span className={cn("font-serif font-bold text-white", textClassName)}>
        {initials}
      </span>
    </div>
  );
}
