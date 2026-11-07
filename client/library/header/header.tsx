import { Colors } from "../colors";
import { HeadingProps } from "./types";

export function Header({ text, level = 2, className }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={className} style={{ color: Colors.primaryBlue, fontFamily: "system-ui" }}>
      {text}
    </Tag>
  );
}
