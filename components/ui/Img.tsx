import NextImage, { type ImageProps } from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the configured basePath (needed for unoptimized static export). */
export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE}${path}` : path;
}

/** next/image wrapper that applies the basePath to local `src` strings. */
export function Image(props: ImageProps) {
  const src = typeof props.src === "string" ? asset(props.src) : props.src;
  return <NextImage {...props} src={src} />;
}
