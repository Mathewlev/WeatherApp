import { ComponentType, SVGProps } from "react";
import { IconSize } from "./consts";

export type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface IconProps {
  /** The svg to render */
  icon: SvgIcon;
  /** size (preset or custom pixels) */
  size: IconSize | number;
  /** icon color, only applies to svgs using currentColor */
  color?: string;
}
