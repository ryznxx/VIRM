import Navbar from "../../components/Navbar/Navbar";
import Text from "../../components/Text/Text";
import { BoxWireBGCOL, BoxWireSize } from "../../components/Types/Boxwire.type";
import { TextColorTone } from "../../components/Types/Text.type";
import BoxWire from "../../components/Wire/Boxwire";
import styles from "../../default/default.module.scss";
import "./Main.css";

export default function Main() {
   return (
      <div className="App">
         <header>
            <Navbar />
         </header>
         <main className="main-container">
            <section className="grid-wrapper">
               <div className="grid-item">
                  <BoxWire
                     isScrollable
                     wiresize={BoxWireSize.medium}
                     functionName="Databases"
                     isFill
                     isPadding
                     bcolor={BoxWireBGCOL.default}
                  >
                     <Text textColorTone={TextColorTone.Soft}>Asu</Text>
                  </BoxWire>
                  <BoxWire
                     isScrollable
                     wiresize={BoxWireSize.medium}
                     functionName="Tables"
                     isPadding
                  >
                     <Text textColorTone={TextColorTone.Soft}>Asu</Text>
                  </BoxWire>
               </div>
               <div className="grid-item">
                  <div className="caction">
                     <BoxWire
                        isScrollable
                        wiresize={BoxWireSize.medium}
                        functionName="Action"
                     >
                        <Text textColorTone={TextColorTone.Soft}>Asu</Text>
                     </BoxWire>
                     <BoxWire
                        isScrollable
                        wiresize={BoxWireSize.medium}
                        functionName="Relation Action"
                     >
                        <Text textColorTone={TextColorTone.Soft}>relation</Text>
                     </BoxWire>
                  </div>

                  <BoxWire
                     wiresize={BoxWireSize.medium}
                     functionName="Table View Record"
                     height="80vh"
                     isFill
                     bcolor={BoxWireBGCOL.default}
                  >
                     <div className="tbv">oke</div>
                     <BoxWireLayer />
                  </BoxWire>
               </div>
               <div className="grid-item">
                  <BoxWire
                     isScrollable
                     wiresize={BoxWireSize.medium}
                     functionName="History"
                  >
                     <Text textColorTone={TextColorTone.Soft}>Anjay</Text>
                  </BoxWire>
               </div>
            </section>
         </main>
      </div>
   );
}

const BoxWireLayer = () => {
   return (
      <>
         <div className="box-wire-layer">
            <BoxWire
               isPadding
               isScrollable
               wiresize={BoxWireSize.medium}
               isFill
               bcolor={BoxWireBGCOL.layer}
            >
               ad
               <div className={styles.oke}>k</div>
            </BoxWire>
         </div>
      </>
   );
};
