import { IconSizeMap } from "./consts";
import { IconProps } from "./types";

export function Icon({ icon: IconComponent, size, color }: IconProps) {
  const px = typeof size === "number" ? size : IconSizeMap[size];

  return <IconComponent width={px} height={px} color={color} />;
}
