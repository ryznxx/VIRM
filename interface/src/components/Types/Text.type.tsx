import React from "react";

/**
 * `TextThickness` enum represents the font weight options
 * available for the `Text` component.
 *
 * - `Light`   → thin font weight.
 * - `Regular` → standard/default font weight.
 * - `Bold`    → thick/bold font weight.
 */
export enum TextThickness {
   Light = "400",
   Regular = "500",
   Bold = "700",
}

/**
 * `TextColorTone` defines font color intensity levels
 * from soft gray to full black.
 */
export enum TextColorTone {
   Faint = "#999999",
   Soft = "#4C4C4C",
   Medium = "#2A2A2A",
   Strong = "#000000",
}
/**
 * Props for the `Text` component.
 *
 * @property textColorTone - Text color level (Soft, Strong).
 * @property textThickness - Optional font weight.
 * @property children - The text or element to render.
 */
export interface TextProps {
   textColorTone: TextColorTone;
   textThickness?: TextThickness;
   className?: string | undefined;
   children: React.ReactNode;
}
