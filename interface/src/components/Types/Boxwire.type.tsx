import React from "react";

/**
 * `BoxWireSize` enum defines the thickness level of the wire (border or line)
 * used in the `BoxWire` component.
 *
 * - `medium`  → standard thickness.
 * - `bold`    → thicker than medium.
 * - `bolder`  → the thickest option.
 */
export enum BoxWireSize {
   none = "none",
   layer = "2px solid #BABABA",
   medium = "2px solid #BABABA",
   bold = "2px solid rgb(176, 176, 176)",
   bolder = "2px solid rgb(176, 176, 176)",
}

export enum BoxWireBGCOL {
   default = "#F2F2F2",
   layer = "#E0E0E0",
}

/**
 * Props for the `BoxWire` component.
 *
 * @property wiresize - Determines the wire thickness using the `BoxWireSize` enum.
 * @property padding - The internal spacing (in pixels) around the content inside the component.
 * @property children - React nodes (text, elements, etc.) rendered within the component.
 */
export interface BoxWireProps {
   wiresize: BoxWireSize;
   functionName?: string;
   wfull?: boolean;
   hfull?: boolean;
   height?: string;
   isFill?: boolean;
   bcolor?: BoxWireBGCOL;
   isPadding?: boolean;
   isScrollable?: boolean;
   children: React.ReactNode;
}
