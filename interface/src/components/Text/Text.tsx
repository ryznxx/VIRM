import { TextColorTone, TextProps, TextThickness } from "../Types/Text.type";

export default function Text({
   textColorTone = TextColorTone.Soft,
   textThickness = TextThickness.Regular,
   className,
   children,
}: TextProps) {
   const paragraphStyle = {
      padding: "0px",
      margin: "0px",
      color: textColorTone,
      fontWeight: textThickness,
   };

   return (
      <p className={className} style={paragraphStyle}>
         {children}
      </p>
   );
}
