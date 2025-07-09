import { ColorTone } from "../../default/default";
import "./Navbar.scss";

export default function Navbar() {
   return (
      <>
         <nav
            className="navbar"
            style={{
               borderBottom: `2px solid ${ColorTone.Faint}`,
            }}
         >
            <h1 className="VIRM">VIRM</h1>
         </nav>
      </>
   );
}
