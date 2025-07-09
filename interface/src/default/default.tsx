interface DefaultStyle {
   borderat: string;
   padding: string;
}

export let defaultStyle: DefaultStyle = {
   borderat: "20px",
   padding: "20px",
};

export enum ColorTone {
   Faint = "#BABABA",
   Soft = "#4C4C4C",
   Medium = "#2A2A2A",
   Strong = "#000000",
}
