import { PrismTheme } from "prism-react-renderer";

const theme: PrismTheme = {
  plain: {
    color: "#4c4f69",
    backgroundColor: "#eff1f5",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin", "important", "type"],
      style: {
        color: "rgb(189, 147, 249)",
      },
    },
    {
      types: ["parameter"],
      style: {
        color: "#e64553",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "#1e66f5",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "	#179299",
      },
    },
    {
      types: ["string", "char", "selector"],
      style: {
        color: "#40a02b",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "#1e66f5",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "#8839ef",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "	#6c6f85",
        fontStyle: "italic",
      },
    },
    {
      types: ["attr-name", "class-name"],
      style: {
        color: "#df8e1d",
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: "#40a02b",
      },
    },
    {
      types: ["number"],
      style: {
        color: "#1e66f5",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "#1e66f5",
      },
    },
    {
      types: ["property"],
      style: {
        color: "#1e66f5",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "	#04a5e5",
      },
    },
  ],
};

export default theme;
