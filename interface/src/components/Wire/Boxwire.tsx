import Text from "../Text/Text";
import { type BoxWireProps } from "../Types/Boxwire.type";
import { TextColorTone } from "../Types/Text.type";
import "./Boxwire.scss";

/**
 * BoxWire component wraps content inside a styled box
 * with dynamic wire thickness (border) and padding.
 */
export default function BoxWire({
   wiresize,
   functionName,
   isPadding,
   height,
   isFill = false,
   bcolor,
   wfull = false,
   isScrollable = false,
   children,
}: BoxWireProps) {
   return (
      <div className="box-wire-wrapper">
         <Text className="box-wire-title" textColorTone={TextColorTone.Faint}>
            {functionName !== "" && functionName?.toString()}
         </Text>
         <div
            className="box-wire"
            style={{
               overflowY: isScrollable ? "scroll" : "hidden",
               padding: isPadding ? "20px" : 0,
               width: wfull ? "100%" : "initial",
               height: height,
               border: wiresize,
               background: isFill ? bcolor : "unset",
               borderRadius: "20px",
            }}
         >
            {children}
         </div>
      </div>
   );
}
